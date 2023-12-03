import { redirect } from 'next/navigation';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchUserProfile } from '@/utils/functions/auth/fetchingUserData';
import { Spinner } from '@chakra-ui/react'


interface RestrictedRouteProps {
  children: React.ReactNode;
}

export default function RestrictedRoute({ children }: RestrictedRouteProps) {
  const { isLoading, isError, isSuccess } = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
    retry: false
  });
  if (isLoading) {
    return (
      <div
        className="flex w-full min-h-fit
        px-10 xl:px-30 2xl:px-40 3xl:px-50 4xl:px-60 5xl:px-70 6xl:px-80
        pt-[6rem] md:pt-[10rem] xl:pt-[16rem] pb-[4rem] md:pb-[10rem]
        justify-evenly justify-items-center
        content-center items-center"
      >
        <Spinner size='xl' />
      </div>
    )
  }
  else if (isError) {
    redirect('/?unauthorized=true');
  }
  else if (isSuccess) {
    return <>{children}</>
  }
}
