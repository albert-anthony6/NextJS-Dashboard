import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { Post } from "../../../lib/types";

async function getData(): Promise<Post[]> {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong.");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getData();

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
