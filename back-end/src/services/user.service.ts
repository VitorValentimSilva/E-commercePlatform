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

  async create(
    data: Omit<ReturnType<typeof prisma.user.create>, "id">
  ): Promise<ReturnType<typeof prisma.user.create>> {
    return prisma.user.create({
      data,
    });
  }

  async update(
    id: number,
    data: Partial<Omit<ReturnType<typeof prisma.user.update>, "id">>
  ): Promise<ReturnType<typeof prisma.user.update>> {
    if ("password" in data && !data.password) {
      delete data.password;
    }

    return prisma.user.update({
      where: { id: Number(id) },
      data,
    });
  }

  async delete(id: number): Promise<ReturnType<typeof prisma.user.delete>> {
    return prisma.user.delete({
      where: { id: Number(id) },
    });
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      throw new Error("Email ou senha inválidos");
    }

    return user;
  }
}

module.exports = UserService;
