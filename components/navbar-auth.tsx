// components/navbar-auth.jsx
'use client';

import Link from 'next/link';

import { LayoutDashboard, LogOut, Settings, User } from 'lucide-react';

// import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function NavbarAuth() {
  // const { user, isAdmin, loading, signOut } = useAuth();

  const handleSignOut = async () => {
    // await signOut();
    window.location.href = '/';
  };

  // if (loading) {
  //   return <div className="h-9 w-20 bg-muted animate-pulse rounded-md" />;
  // }

  // if (!user) {
  //   return (
  //     <div className="flex items-center gap-2">
  //       <Button variant="ghost" asChild>
  //         <Link href="/auth/login">Sign In</Link>
  //       </Button>
  //       <Button asChild>
  //         <Link href="/auth/sign-up">Get Started</Link>
  //       </Button>
  //     </div>
  //   );
  // }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <div className="px-2 py-1.5 text-sm text-muted-foreground truncate">
          {/* {user.email} */}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
            <User className="h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile?tab=settings" className="flex items-center gap-2 cursor-pointer">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer">
            <LayoutDashboard className="h-4 w-4" />
            My Downloads
          </Link>
        </DropdownMenuItem>
        {/* {isAdmin && (
          <DropdownMenuItem asChild>
            <Link href="/admin" className="flex items-center gap-2 cursor-pointer">
              <Shield className="h-4 w-4" />
              Admin Panel
            </Link>
          </DropdownMenuItem>
        )} */}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="flex items-center gap-2 cursor-pointer text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
