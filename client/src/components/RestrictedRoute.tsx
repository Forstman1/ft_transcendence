import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';
import { UserState } from '@/redux/slices/authUser/authUserSlice';
import React from 'react';

interface RestrictedRouteProps {
  children: React.ReactNode;
}

export default function RestrictedRoute({ children }: RestrictedRouteProps) {
  const isAuthorized = useSelector((state: { authUser: UserState }) => state.authUser.isAuthenticated);

  if (!isAuthorized) {
    redirect('/?unauthorized=true');
  }
  else
    return <>{children}</>
}
