import z = require("zod");

const userSchema = z.object({
  email: z.email("Email inválido"),
  name: z.string().min(1, "Nome é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

module.exports = userSchema;
