import { z } from "zod";

export const createProductSchema =
  z.object({
    name: z.string().min(2),

    sku: z.string().min(2),

    pricePerBaseUnit:
      z.number().positive(),

    inventoryQuantity:
      z.number().positive(),
  });