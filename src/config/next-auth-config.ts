import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
        surename:{}
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:8000/login", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            password: credentials?.password,
            email: credentials?.email,
            surename:credentials?.surename,
          }),
        });
        const data = await res.json();

        if (data) {
          return data;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = { ...(token.user ?? {}) };
        session.user.accessToken = token.accessToken as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token = { ...token, user: { ...user.user } };
        token.accessToken = user.accessToken;
      }

      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60*60,
  },
  pages: {
    signIn: "/login",
  },
};
