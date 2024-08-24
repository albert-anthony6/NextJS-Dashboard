"use client";

import { useRouter } from "next/navigation";
import { register } from "../../../lib/actions";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        name="passwordConfirm"
        placeholder="confirm password"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <strong>Login</strong>
      </Link>
    </form>
  );
}
