import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import React from 'react';
// import { useToast, Alert, AlertIcon} from "@chakra-ui/react";
// import { useEffect } from 'react';

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
  // const toast = useToast();
  const isAuthorized = useSelector((state: { authUser: UserState }) => state.authUser.isAuthenticated);

  // useEffect(() => {
  //   if (!isAuthorized) {
  //     toast({
  //       position: 'top-right',
  //       duration: 5000,
  //       isClosable: true,
  //       render: () => (
  //         <Alert status="error" variant="top-accent">
  //           <AlertIcon />
  //           Please login to access this page
  //         </Alert>
  //       ),
  //     });
  //   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthorized]);

  if (!isAuthorized) {
    router.push('/?unauthorized=true');
    return null;
  }
  else
    return <>{children}</>;
};

export default RestrictedRoute;
