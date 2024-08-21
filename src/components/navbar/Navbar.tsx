import styles from "./navbar.module.css";
import Links from "./links/Links";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </nav>
  );
}
