"use server";

import { signIn } from "@/auth";

export async function login(data) {
  try {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    return res;
  } catch (error) {
    throw new Error(error);
  }
}
