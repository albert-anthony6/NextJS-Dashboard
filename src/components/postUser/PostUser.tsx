import { getUser } from "../../../lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

interface Props {
  userId: string;
}

export default async function PostUser({ userId }: Props) {
  const user = await getUser(userId);

  return (
    <div className={styles.postUser}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt="Avatar image."
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
}
