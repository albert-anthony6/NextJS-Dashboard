import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          sequi, placeat nam odit rerum pariatur doloribus eligendi ut eveniet
          delectus?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Brands."
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.gif"
          alt="Hero image."
          fill
          className={styles.heroImg}
        />
      </div>
    </main>
  );
}
