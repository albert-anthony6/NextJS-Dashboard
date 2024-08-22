import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Logo</div>
      <p className={styles.text}>
        Creative thoughts agency © All rights reserved.
      </p>
    </footer>
  );
}
