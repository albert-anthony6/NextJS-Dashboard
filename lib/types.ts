import { Session as NextAuthSession } from "next-auth";

export interface Session extends NextAuthSession {
  user: User;
}

export interface Post {
  id: string;
  title: string;
  desc: string;
  img: string;
  userId: string;
  slug: string;
  createdAt: Date;
}

export interface User {
  userId: string;
  username: string;
  email: string;
  img: string;
  isAdmin: Boolean;
}
