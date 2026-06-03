import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const password =
    await bcrypt.hash(
      "Admin@123",
      10
    );

  await prisma.user.upsert({
    where: {
      email: "admin@test.com",
    },

    update: {},

    create: {
      name: "System Admin",
      email: "admin@test.com",
      password,
      role: "ADMIN",
    },
  });
}

main();