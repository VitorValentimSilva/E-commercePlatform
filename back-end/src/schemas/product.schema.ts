import z = require("zod");

const productSchema = z
  .object({
    sku: z
      .string()
      .min(3, "SKU deve ter pelo menos 3 caracteres")
      .max(50, "SKU deve ter no máximo 50 caracteres"),
    gtin: z
      .string()
      .length(13, "GTIN deve ter 13 dígitos")
      .optional()
      .or(z.literal("")),
    slug: z
      .string()
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug deve estar em formato URL amigável (ex: produto-exemplo)"
      ),
    title: z
      .string()
      .min(3, "Título deve ter pelo menos 3 caracteres")
      .max(120, "Título deve ter no máximo 120 caracteres"),
    shortDescription: z
      .string()
      .max(255, "Descrição curta deve ter no máximo 255 caracteres")
      .optional(),
    description: z.string().optional(),
    price: z.number().positive("Preço deve ser maior que zero"),
    promotionalPrice: z
      .number()
      .positive("Preço promocional deve ser maior que zero")
      .optional(),
    promotionalStart: z.date().optional(),
    promotionalEnd: z.date().optional(),
    stock: z
      .number()
      .int("Estoque deve ser um número inteiro")
      .nonnegative("Estoque não pode ser negativo"),
    minStock: z
      .number()
      .int("Estoque mínimo deve ser um número inteiro")
      .nonnegative("Estoque mínimo não pode ser negativo")
      .optional(),
    unit: z
      .string()
      .max(20, "Unidade deve ter no máximo 20 caracteres")
      .optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    color: z.string().optional(),
    size: z.string().optional(),
    material: z.string().optional(),
    weight: z.number().positive("Peso deve ser maior que zero").optional(),
    width: z.number().positive("Largura deve ser maior que zero").optional(),
    height: z.number().positive("Altura deve ser maior que zero").optional(),
    length: z
      .number()
      .positive("Comprimento deve ser maior que zero")
      .optional(),
    mainImage: z.url("Imagem principal deve ser uma URL válida").optional(),
    isActive: z.boolean().default(true),
    isFeatured: z.boolean().default(false),
    type: z.enum(["PHYSICAL", "DIGITAL"]).default("PHYSICAL"),
    metaTitle: z
      .string()
      .max(60, "Meta title deve ter no máximo 60 caracteres")
      .optional(),
    metaDescription: z
      .string()
      .max(160, "Meta description deve ter no máximo 160 caracteres")
      .optional(),
    categories: z
      .array(z.number().int("ID da categoria deve ser inteiro"))
      .optional(),
    tags: z.array(z.string()).optional(),
    images: z
      .array(
        z.object({
          url: z.string().url("A URL da imagem deve ser válida"),
          alt: z
            .string()
            .max(120, "Texto alternativo deve ter no máximo 120 caracteres")
            .optional(),
        })
      )
      .optional(),
  })
  .refine(
    (data) => {
      if (data.promotionalPrice && data.promotionalPrice >= data.price) {
        return false;
      }
      return true;
    },
    {
      message: "Preço promocional deve ser menor que o preço normal",
      path: ["promotionalPrice"],
    }
  )
  .refine(
    (data) => {
      if (data.promotionalStart && data.promotionalEnd) {
        return data.promotionalStart < data.promotionalEnd;
      }
      return true;
    },
    {
      message: "Data de início da promoção deve ser anterior à data de fim",
      path: ["promotionalStart"],
    }
  );

module.exports = productSchema;
