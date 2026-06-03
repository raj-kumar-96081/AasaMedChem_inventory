import { prisma } from "@/lib/prisma/prisma";

export class ProductRepository {
  async findById(id: string) {
    return prisma.product.findUnique({
      where: { id },
    });
  }

  async findMany() {
    return prisma.product.findMany();
  }
}