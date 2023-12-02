import { UserState } from '@/redux/slices/authUser/authUserSlice';
import { toDataURL } from 'qrcode';
import { authenticator } from 'otplib';
import axios from 'axios';
import { UseToastOptions, ToastId } from '@chakra-ui/react';

/* ------------------------------------------------------------------------------------------------------------------ */

export async function fetchUserProfile(): Promise<any> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/user`,
    { withCredentials: true },
  );
  return response;
}

/* ------------------------------------------------------------------------------------------------------------------ */

export async function loginWithService(service: string): Promise<any> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/${service}/login`,
    { withCredentials: true }
  );
  return response;
}

/* ------------------------------------------------------------------------------------------------------------------ */

export async function logout(): Promise<any> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`,
    { withCredentials: true }
  );
  return response;
}

/* ------------------------------------------------------------------------------------------------------------------ */

export async function verify2FA(otp: string): Promise<any> {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/2fa/verify`,
    { twoFactorAuthCode: otp },
    { withCredentials: true },
  );
  return response;
}

/* ------------------------------------------------------------------------------------------------------------------ */

export async function enable2FA(secret: string): Promise<any> {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/2fa/enable`,
    { otpSecret: secret },
    { withCredentials: true },
  );
  return response;
}

export async function disable2FA(otp: string): Promise<any> {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/2fa/disable`,
    { twoFactorAuthCode: otp },
    { withCredentials: true },
  );
  return response;
}

/* ------------------------------------------------------------------------------------------------------------------ */

export async function generateTwoFaData(user: UserState):
  Promise<{secret: string, otpUrl: string, qrcode: string}>
{
  const secret = authenticator.generateSecret();
  const otpUrl: string = authenticator.keyuri(
    user.email,
    'Pong',
    secret,
  );
  const qrcode: string = await toDataURL(otpUrl)
  return { secret, otpUrl, qrcode }
}

export function verifyTwoFaPin(pin: string, secret: string): boolean {
    const isValid = authenticator.verify({
    token: pin,
    secret: secret,
  });
  return isValid;
}

/* ------------------------------------------------------------------------------------------------------------------ */

export function makeToast(
  toast: any,
  title: UseToastOptions['title'],
  description: UseToastOptions['description'],
  status: UseToastOptions['status'],
  id: ToastId
  ) {
  if (!toast.isActive(id)) {
    toast({
      title: title,
      description: description,
      status: status,
      id: id,
      position: 'bottom-right',
      variant: 'solid',
      isClosable: true,
      duration: 5000,
    })
  }
}