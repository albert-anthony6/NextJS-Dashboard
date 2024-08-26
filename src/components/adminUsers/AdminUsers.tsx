import styles from "./adminUsers.module.css";
import Image from "next/image";
import { getAllUsers } from "../../../lib/data";
import { deleteUser } from "../../../lib/actions";

const AdminUsers = async () => {
  const users = await getAllUsers();

  return (
    <div className={styles.adminPage}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noAvatar.png"}
              alt="No avatar image."
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
