'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';




export default function userPage() {
    const userId = useSelector((state:any) => state.authUser.userId)
    const router = useRouter();
  
    useEffect(() => {
        router.push('/profile/' + userId);
    }, [userId]);

  return (
    <div className="w-full h-full py-40 px-8 container m-auto">
        <h1>user Page ...{userId}..</h1>
    </div>
  )
}
