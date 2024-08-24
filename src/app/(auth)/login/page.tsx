import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "../../../../lib/actions";

export default function LoginPage() {
  return (
    <main className={styles.loginPage}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login With Github</button>
        </form>
        <LoginForm />
      </div>
    </main>
  );
}
