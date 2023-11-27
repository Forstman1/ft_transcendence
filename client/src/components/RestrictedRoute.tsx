import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { UserState } from '@/redux/slices/authUser/authUserSlice';
import React, { useEffect } from 'react';

interface RestrictedRouteProps {
  children: React.ReactNode;
}

export default function RestrictedRoute({ children }: RestrictedRouteProps) {
  const router = useRouter();
  const user: UserState = useSelector((state: { authUser: UserState }) => state.authUser);

  useEffect(() => {
    if (user && !user.isAuthenticated) {
      router.push('/?unauthorized=true');
    }
  }, [user, router]);

  return <>{children}</>;
}