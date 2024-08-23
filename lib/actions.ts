"use server";
import { signIn, signOut } from "./auth";

export async function handleGithubLogin() {
  await signIn("github");
}

export async function handleLogout() {
  await signOut();
}
