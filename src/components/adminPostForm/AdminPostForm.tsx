"use client";

import { addPost } from "../../../lib/actions";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

export default function AdminPostForm({ userId }: { userId: string }) {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.adminPostForm}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
}
