const PrismaClient = require("../generated/prisma").PrismaClient;

const prisma = new PrismaClient();

class ProductService {
  async getAll(): Promise<ReturnType<typeof prisma.product.findMany>> {
    return prisma.product.findMany();
  }

  async getById(
    id: number
  ): Promise<ReturnType<typeof prisma.product.findUnique>> {
    return prisma.product.findUnique({
      where: { id: Number(id) },
    });
  }

  async create(
    data: Omit<ReturnType<typeof prisma.product.create>, "id">
  ): Promise<ReturnType<typeof prisma.product.create>> {
    return prisma.product.create({
      data,
    });
  }

  async update(
    id: number,
    data: Partial<Omit<ReturnType<typeof prisma.product.update>, "id">>
  ): Promise<ReturnType<typeof prisma.product.update>> {
    return prisma.product.update({
      where: { id: Number(id) },
      data,
    });
  }

  async delete(id: number): Promise<ReturnType<typeof prisma.product.delete>> {
    return prisma.product.delete({
      where: { id: Number(id) },
    });
  }
}

module.exports = ProductService;
