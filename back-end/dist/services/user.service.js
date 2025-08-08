"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrismaClient = require("../generated/prisma").PrismaClient;
const prisma = new PrismaClient();
class UserService {
    async getAll() {
        return prisma.user.findMany();
    }
    async getById(id) {
        return prisma.user.findUnique({
            where: { id: Number(id) },
        });
    }
}
module.exports = UserService;
//# sourceMappingURL=user.service.js.map