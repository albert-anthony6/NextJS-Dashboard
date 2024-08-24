import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/RegisterForm";

export default function RegisterPage() {
  return (
    <main className={styles.registerPage}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </main>
  );
}
