import { DefaultSession } from "next-auth";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user:
      | (DefaultSession["user"] & {
          id: string;
          username: string;
          accessToken?: string;
        })
      | null;
  }

  interface User {
    id: string;
    username: string;
    imgUrl?: string;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
