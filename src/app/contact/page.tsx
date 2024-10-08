import { Metadata } from "next";
import styles from "./contact.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact description",
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact image."
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
