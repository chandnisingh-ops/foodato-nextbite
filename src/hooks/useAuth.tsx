import { createContext, useContext, ReactNode, useMemo } from 'react';
import { useUser, useSession, useClerk } from '@clerk/clerk-react';

type AuthUserLike = {
  id: string;
  email: string | null;
  user_metadata?: { full_name?: string };
} | null;

type SessionLike = unknown | null;

interface AuthContextType {
  user: AuthUserLike;
  session: SessionLike;
  loading: boolean;
  signUp: (email?: string, password?: string, fullName?: string) => Promise<{ error: any | null }>;
  signIn: (email?: string, password?: string) => Promise<{ error: any | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded } = useUser();
  const { session } = useSession();
  const { signOut: clerkSignOut } = useClerk();

  const mappedUser: AuthUserLike = useMemo(() => {
    if (!user) return null;
    const primaryEmail = user.primaryEmailAddress?.emailAddress ?? null;
    const fullName = user.fullName ?? undefined;
    return {
      id: user.id,
      email: primaryEmail,
      user_metadata: { full_name: fullName },
    };
  }, [user]);

  const value: AuthContextType = {
    user: mappedUser,
    session: (session as unknown) ?? null,
    loading: !isLoaded,
    // Redirect to our SPA auth page which renders Clerk components
    signUp: async () => {
      window.location.assign('/auth');
      return { error: null };
    },
    signIn: async () => {
      window.location.assign('/auth');
      return { error: null };
    },
    signOut: async () => {
      await clerkSignOut();
    },
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};