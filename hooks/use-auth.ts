'use client';

// import { useEffect, useState } from 'react';

// import type { User as SupabaseUser } from '@supabase/supabase-js';

// import { createClient } from '@/lib/supabase/client';

// Keep single instance
// let globalAuthState = {
//   user: null as SupabaseUser | null,
//   isAdmin: false,
//   loading: true,
// };

// const listeners = new Set<() => void>();

// function notifyListeners() {
//   listeners.forEach(listener => listener());
// }

export function useAuth() {
  // const [state, setState] = useState(globalAuthState);

  // useEffect(() => {
    // Add listener
    // const listener = () => setState({ ...globalAuthState });
    // listeners.add(listener);

    // Initialize auth only once
    // if (globalAuthState.loading) {
      // const supabase = createClient();

      // supabase.auth.getUser().then(({ data: { user } }) => {
      //   if (user) {
      //     supabase.from('profiles')
      //       .select('is_admin')
      //       .eq('id', user.id)
      //       .single()
      //       .then(({ data: profile }) => {
      //         globalAuthState = {
      //           user,
      //           isAdmin: profile?.is_admin || false,
      //           loading: false,
      //         };
      //         notifyListeners();
      //       });
      //   } else {
      //     globalAuthState = { user: null, isAdmin: false, loading: false };
      //     notifyListeners();
      //   }
      // });

      // Listen for changes
      // supabase.auth.onAuthStateChange((_event, session) => {
      //   const user = session?.user ?? null;

      //   if (user) {
      //     supabase.from('profiles')
      //       .select('is_admin')
      //       .eq('id', user.id)
      //       .single()
      //       .then(({ data: profile }) => {
      //         globalAuthState = {
      //           user,
      //           isAdmin: profile?.is_admin || false,
      //           loading: false,
      //         };
      //         notifyListeners();
      //       });
      //   } else {
      //     globalAuthState = { user: null, isAdmin: false, loading: false };
      //     notifyListeners();
      //   }
      // });
    // }

    // return () => {
    //   // listeners.delete(listener);
    // };
  // }, []);

  const signOut = async () => {
    return null;
    // const supabase = createClient();
    // await supabase.auth.signOut();
  };

  // return { ...state, signOut };
  return { signOut };
}
