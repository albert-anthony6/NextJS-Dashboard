import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";
import { getPost } from "../../../../lib/data";
import PostUser from "@/components/postUser/PostUser";

interface Post {
  title: string;
  desc: string;
  img: string;
  userId: string;
  slug: string;
  createdAt: Date;
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

export default async function SinglePostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post: Post = await getPost(slug);

  return (
    <main className={styles.singlePost}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="Post image." fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </main>
  );
}
