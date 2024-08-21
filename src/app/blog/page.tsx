import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

export default function BlogPage() {
  return (
    <main className={styles.blogPage}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </main>
  );
}
