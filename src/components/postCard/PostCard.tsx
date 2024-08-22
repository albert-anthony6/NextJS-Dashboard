import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

interface Props {
  post: {
    title: string;
    desc: string;
    img: string;
    userId: string;
    slug: string;
  };
}

export default function PostCard({ post }: Props) {
  return (
    <div className={styles.postCard}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image
              src={post.img}
              alt="Post image."
              fill
              className={styles.img}
            />
          </div>
        )}
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}
