import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "../../../lib/data";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className={styles.blogPage}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </main>
  );
}
