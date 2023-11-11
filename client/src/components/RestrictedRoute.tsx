import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

interface UserState {
  isAuthenticated: boolean;
  username: string;
  email: string;
  avatarUrl: string;
  isOnline: boolean;
}

interface RestrictedRouteProps {
  children: React.ReactNode;
}

const RestrictedRoute = ({ children }: RestrictedRouteProps) => {
  const router = useRouter();
  const isAuthorized = useSelector((state: { authUser: UserState }) => state.authUser.isAuthenticated);
  console.log(isAuthorized);
  if (!isAuthorized) {
    router.push('/');
    return null;
  }
  return <>{children}</>;
};

export default RestrictedRoute;