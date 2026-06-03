import { prisma } from "@/lib/prisma/prisma";

export class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createBuyer(data: {
    name: string;
    email: string;
    password: string;
  }) {
    return prisma.user.create({
      data: {
        ...data,
        role: "BUYER",
      },
    });
  }

  async createSeller(data: {
    name: string;
    email: string;
    password: string;
    businessName: string;
    phone?: string;
    gstNumber?: string;
    address?: string;
  }) {
    return prisma.$transaction(
      async (tx) => {
        const user =
          await tx.user.create({
            data: {
              name: data.name,
              email: data.email,
              password: data.password,
              role: "SELLER",
            },
          });

        await tx.sellerProfile.create({
          data: {
            userId: user.id,
            businessName:
              data.businessName,
            phone: data.phone,
            gstNumber: data.gstNumber,
            address: data.address,
          },
        });

        return user;
      }
    );
  }
}