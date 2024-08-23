import styles from "./navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";
import { auth } from "../../../lib/auth";
import { Session } from "../../../lib/types";

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <Links session={session as Session} />
    </nav>
  );
}
