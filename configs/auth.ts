import type { AuthOptions, User } from 'next-auth';
import GoggleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { users } from '@/data/users';

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    Credentials({
      credentials: {
        email: { lable: 'email', type: 'email', required: true },
        password: { lable: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find(
          (user) => user.email === credentials.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithputPass } = currentUser;

          return userWithputPass as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
