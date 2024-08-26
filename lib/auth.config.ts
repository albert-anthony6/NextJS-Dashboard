import { NextRequest } from "next/server";
import { User } from "./types";

export const authConfig: any = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: { id: string; isAdmin: Boolean };
      user: { id: string; isAdmin: Boolean };
    }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: { user: { id: string; isAdmin: Boolean } };
      token: { id: string; isAdmin: Boolean };
    }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({
      auth,
      request,
    }: {
      auth: { user: User };
      request: NextRequest;
    }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // Only admin can reach the admin dashboard
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // Only authenticated users can reach the blog page
      if (isOnBlogPage && !user) {
        return false;
      }

      // Only Unauthenticated users can reach the login page
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
