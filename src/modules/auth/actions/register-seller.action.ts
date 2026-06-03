"use server";

import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export type ActionState = {
  success: boolean | null;
};

export async function registerSellerAction(
    prevState: ActionState,
  formData: FormData
) {
  try {
    await authService.registerSeller({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      businessName:
        formData.get("businessName") as string,
      phone: formData.get("phone") as string,
      gstNumber:
        formData.get("gstNumber") as string,
      address:
        formData.get("address") as string,
    });

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
    };
  }
}