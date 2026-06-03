"use server";

import { signIn } from "next-auth/react";

export async function loginAction(
  email: string,
  password: string
) {
  await signIn("credentials", {
    email,
    password,
    redirect: true,
  });
}