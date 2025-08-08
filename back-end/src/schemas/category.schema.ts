import z = require("zod");

const categorySchema = z.object({
  name: z.string().min(4, "Nome é obrigatório"),
  parentId: z.number().int().positive().optional().nullable(),
  path: z.string().optional(),
  level: z.number().int().min(0).optional(),
  order: z.number().int().min(0).optional(),
  isActive: z.boolean().optional(),
  imageUrl: z.url().optional().nullable(),
  metaTitle: z.string().max(60).optional().nullable(),
  metaDescription: z.string().max(160).optional().nullable(),
});

module.exports = categorySchema;
