import axios from 'axios';

export async function fetchUserProfile(): Promise<any> {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}auth/user`,
      { withCredentials: true }
    );
    return response.data;
}

export async function verify2FA(otp: string): Promise<any>  {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}auth/2fa/verify`,
    { twoFactorAuthCode: otp },
    { withCredentials: true }
  );
  return response.data;
}