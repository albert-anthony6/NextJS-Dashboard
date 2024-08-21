import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>lamadev</div>
      <p className={styles.text}>
        Lama creative thoughts agency © All rights reserved.
      </p>
    </footer>
  );
}
