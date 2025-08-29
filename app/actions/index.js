// login.js (client-side function)
"use client";
import { signIn } from "next-auth/react";

export async function login(data) {
  try {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false, // prevent default redirection
    });

    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}
