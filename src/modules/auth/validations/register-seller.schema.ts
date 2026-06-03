import { z } from "zod";

export const registerSellerSchema = z.object({
  name: z.string().min(2),

  email: z.email(),

  password: z.string().min(6),

  businessName: z.string().min(2),

  phone: z.string().optional(),

  gstNumber: z.string().optional(),

  address: z.string().optional(),
});