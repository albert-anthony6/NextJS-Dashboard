"use client";

import { useState } from "react";
import { Session } from "../../../../lib/types";
import { handleLogout } from "../../../../lib/actions";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export default function Links({ session }: { session: Session | null }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {links.map((link, idx) => (
          <li className="link" key={`${idx}-${link.title}`}>
            <NavLink item={link} />
          </li>
        ))}
        {session?.user ? (
          <>
            {session.user.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </ul>
      <Image
        src="/menu.png"
        alt="Menu button."
        width={30}
        height={30}
        onClick={() => setOpen(!open)}
        className={styles.menuButton}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, idx) => (
            <NavLink item={link} key={`${idx}-${link.title}`} />
          ))}
        </div>
      )}
    </div>
  );
}
