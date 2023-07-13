'use client';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callback') || '/';

  return (
    <button
      className="googleBtn"
      onClick={() => signIn('google', { callbackUrl })}
    >
      SignIn with Google
    </button>
  );
};

export { GoogleButton };
