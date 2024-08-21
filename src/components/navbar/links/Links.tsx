import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

export default function Luinks() {
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

  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <li className="link" key={link.title}>
          <NavLink item={link} key={link.title} />
        </li>
      ))}
    </ul>
  );
}
