-- Fix infinite recursion in RLS policies
-- The issue: profiles policy checks profiles table for is_admin, causing infinite loop

-- Drop existing problematic policies
DROP POLICY IF EXISTS "profiles_select_own" ON profiles;
DROP POLICY IF EXISTS "purchases_select_own" ON purchases;
DROP POLICY IF EXISTS "projects_insert_admin" ON projects;
DROP POLICY IF EXISTS "projects_update_admin" ON projects;
DROP POLICY IF EXISTS "projects_delete_admin" ON projects;

-- Create a security definer function to check admin status
-- This bypasses RLS and prevents recursion
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM profiles WHERE id = auth.uid()),
    false
  )
$$;

-- Profiles: Users can view their own profile, admins can view all
-- Use direct auth.uid() check to avoid recursion
CREATE POLICY "profiles_select_own" ON profiles FOR SELECT USING (
  auth.uid() = id OR public.is_admin()
);

-- Purchases: Users can view their own, admins can view all
CREATE POLICY "purchases_select_own" ON purchases FOR SELECT USING (
  auth.uid() = user_id OR public.is_admin()
);

-- Projects: Only admins can modify
CREATE POLICY "projects_insert_admin" ON projects FOR INSERT WITH CHECK (
  public.is_admin()
);
CREATE POLICY "projects_update_admin" ON projects FOR UPDATE USING (
  public.is_admin()
);
CREATE POLICY "projects_delete_admin" ON projects FOR DELETE USING (
  public.is_admin()
);
