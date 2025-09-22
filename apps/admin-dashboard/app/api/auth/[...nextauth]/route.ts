import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { lable: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await axios.post(
            `https//:localhost:3000/api/v1/admin/login`,
            {
              username: credentials?.username,
              password: credentials?.password,
            }
          );
          const user = res.data?.user;
          const token = res.data?.token;
          if (!user && !token) return null;
          const userNextAuth = {
            id: user.id,
            username: user.username,
            imgUrl: user.imgUrl,
            accessToken: token,
          };
          return userNextAuth;
        } catch {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.accessToken && session.user) {
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
