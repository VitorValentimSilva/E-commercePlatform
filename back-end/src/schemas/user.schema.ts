const z = require("zod");

const userSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.email("Email inválido"),
  age: z.number().int().positive().optional(),
});

module.exports = userSchema;
