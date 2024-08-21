import styles from "./navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <Links />
    </nav>
  );
}
