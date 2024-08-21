"use client";

import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

interface Props {
  item: { title: string; path: string };
}

export default function NavLink({ item }: Props) {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
}
