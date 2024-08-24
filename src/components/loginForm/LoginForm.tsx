"use client";

import { login } from "../../../lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <strong>Register</strong>
      </Link>
    </form>
  );
}
