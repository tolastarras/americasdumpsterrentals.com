export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  joinDate: string;
  lastLogin: string;
  accountId: string;
  plan: string;
  usage: {
    storage: string;
    projects: number;
    apiCalls: string;
  };
}

// Extended interface example (if needed later)
export interface AdminUser extends User {
  permissions: string[];
  isSuperAdmin: boolean;
}

// Props for components that need user
export interface UserProfileProps {
  user: User;
  onUpdate?: (updatedUser: Partial<User>) => void;
}

// Type for user updates (partial updates)
export type UserUpdate = Partial<Omit<User, 'id' | 'accountId'>>;
