"use server";

import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export type ActionState = {
  success: boolean | null;
  message: string;
};

export async function registerBuyerAction(
    prevState: ActionState,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await authService.registerBuyer({
      name,
      email,
      password,
    });

    return {
      success: true,
      message: "Buyer registered successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Registration failed",
    };
  }
}