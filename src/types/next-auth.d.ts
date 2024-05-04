import NextAuth from "next-auth";
import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    accessToken: string;
    user: { email: string; name: string; id: number, surename: string };
  }
  interface JWT {
    accessToken: string;
    user: {
      email: string;
      accessToken: string;
      name: string;
      id: number;
      surename?: string
    };
  }
  interface Session {
    user: {
      email?: string;
      accessToken?: string;
      name?: string;
      id?: number;
      surename?: string
    }
  }
}
