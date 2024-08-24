import styles from "./register.module.css";
import { register } from "../../../../lib/actions";

export default function RegisterPage() {
  return (
    <main className={styles.registerPage}>
      <div className={styles.wrapper}>
        <form action={register}>
          <input type="text" name="username" placeholder="username" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="confirm password"
          />
          <button>Register</button>
        </form>
      </div>
    </main>
  );
}
