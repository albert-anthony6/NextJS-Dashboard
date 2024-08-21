"use client";

import { useState } from "react";
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

export default function Luinks() {
  const [open, setOpen] = useState(false);

  // TODO: (TEMPORARY) Delete later
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {links.map((link, idx) => (
          <li className="link" key={`${idx}-${link.title}`}>
            <NavLink item={link} />
          </li>
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
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
