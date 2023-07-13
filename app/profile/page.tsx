import { authConfig } from '@/configs/auth';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

export const metadata: Metadata = {
  title: 'Profile | Next App',
};

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div className="container">
      <h2>Profile of {session?.user?.name}</h2>
      {session?.user?.image && <img src={session.user.image} alt="avatar" />}
    </div>
  );
}
