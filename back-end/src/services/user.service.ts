const PrismaClient = require("../generated/prisma").PrismaClient;

const prisma = new PrismaClient();

class UserService {
  async getAll(): Promise<ReturnType<typeof prisma.user.findMany>> {
    return prisma.user.findMany();
  }

  async getById(
    id: number
  ): Promise<ReturnType<typeof prisma.user.findUnique>> {
    return prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }
}

module.exports = UserService;
