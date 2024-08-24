"use server";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export async function handleGithubLogin() {
  await signIn("github");
}

export async function handleLogout() {
  await signOut();
}

export async function register(formData: FormData) {
  console.log(formData);
  const { username, email, password, img, passwordConfirm } =
    Object.fromEntries(formData);

  if (password !== passwordConfirm) {
    return "Passwords do not match.";
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user !== null) {
      return "Username already exists.";
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
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
  }
}

export async function login(formData: FormData) {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong." };
  }
}
