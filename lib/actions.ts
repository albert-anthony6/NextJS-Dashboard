"use server";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";

type FormState = {
  username: string;
  email?: string;
  password: string;
  img?: string;
  passwordConfirm?: string;
};

export async function handleGithubLogin() {
  await signIn("github");
}

export async function handleLogout() {
  await signOut();
}

export async function register(
  previousState: FormState | unknown,
  formData: FormData
) {
  console.log(formData);
  const { username, email, password, img, passwordConfirm } =
    Object.fromEntries(formData);

  if (password !== passwordConfirm) {
    return { error: "Passwords do not match." };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user !== null) {
      return { error: "Username already exists." };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(`${password}`, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
  }
}

export async function login(
  previousState: FormState | unknown,
  formData: FormData
) {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if ((err as Error).message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password." };
    }

    throw err;
  }
}
