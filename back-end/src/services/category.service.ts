const PrismaClient = require("../generated/prisma").PrismaClient;

const prisma = new PrismaClient();

class CategoryService {
    async getAll(): Promise<ReturnType<typeof prisma.category.findMany>> {
        return prisma.category.findMany();
    }
    
    async getById(
        id: number
    ): Promise<ReturnType<typeof prisma.category.findUnique>> {
        return prisma.category.findUnique({
        where: { id: Number(id) },
        });
    }
    
    async create(
        data: Omit<ReturnType<typeof prisma.category.create>, "id">
    ): Promise<ReturnType<typeof prisma.category.create>> {
        return prisma.category.create({
        data,
        });
    }
    
    async update(
        id: number,
        data: Partial<Omit<ReturnType<typeof prisma.category.update>, "id">>
    ): Promise<ReturnType<typeof prisma.category.update>> {
        return prisma.category.update({
        where: { id: Number(id) },
        data,
        });
    }
    
    async delete(id: number): Promise<ReturnType<typeof prisma.category.delete>> {
        return prisma.category.delete({
        where: { id: Number(id) },
        });
    }
}

module.exports = CategoryService;
