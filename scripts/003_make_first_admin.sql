-- Run this script to make a user an admin
-- Replace 'your-email@example.com' with your actual email
UPDATE profiles 
SET is_admin = true 
WHERE email = 'your-email@example.com';

-- Or you can make the first user an admin
-- UPDATE profiles SET is_admin = true WHERE id = (SELECT id FROM profiles ORDER BY created_at ASC LIMIT 1);
