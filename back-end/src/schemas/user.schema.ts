import z = require("zod");

const userSchema = z.object({
  email: z.email("Email inválido"),
  nameFull: z.string().min(6, "Nome é obrigatório"),
  namePlace: z.string().min(4, "Nome de usuário é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

const userUpdate = z.object({
  email: z.email("Email inválido"),
  nameFull: z.string().min(6, "Nome é obrigatório"),
  namePlace: z.string().min(4, "Nome de usuário é obrigatório"),
});

module.exports = { userSchema, userUpdate };
