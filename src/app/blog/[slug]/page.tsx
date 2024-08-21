import Image from "next/image";
import styles from "./singlePost.module.css";

export default function SinglePostPage() {
  return (
    <main className={styles.singlePost}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1515877389505-58825bad4e5a?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Post image."
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.unsplash.com/photo-1515877389505-58825bad4e5a?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar image."
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          voluptatum in, pariatur harum provident qui nostrum non aperiam
          repellendus molestias expedita culpa modi. Tempora reprehenderit
          eligendi velit corrupti debitis et!
        </div>
      </div>
    </main>
  );
}
