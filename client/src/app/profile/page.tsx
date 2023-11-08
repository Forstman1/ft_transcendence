'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';




export default function userPage() {
    const username = useSelector((state:any) => state.authUser.username)
    const router = useRouter();
  
    useEffect(() => {

    //   if (!username) {
        router.push('/profile/' + username);
    //   }
    }, [username]);

  return (
    <div className="w-full h-full py-40 px-8 container m-auto">
        <h1>user Page ...{username}..</h1>
    </div>
  )
}
