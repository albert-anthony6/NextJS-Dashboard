import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1515877389505-58825bad4e5a?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image for about us."
          fill
        />
      </div>
    </>
  );
}
