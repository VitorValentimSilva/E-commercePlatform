const productSwagger = {
  "/product": {
    get: {
      summary: "Retorna todos os produtos cadastrados",
      description: "Retorna uma lista completa com os dados dos produtos.",
      tags: ["Produto"],
      responses: {
        "200": {
          description: "Lista de produtos",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Product" },
              },
            },
          },
        },
      },
    },
    post: {
      summary: "Cria um novo produto",
      description: "Cria um novo produto com os dados fornecidos.",
      tags: ["Produto"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ProductCreate" },
            examples: {
              exemplo1: {
                summary: "Exemplo de criação de produto",
                value: {
                  sku: "SKU123",
                  slug: "smartphone-xpto",
                  title: "Smartphone XPTO",
                  price: 1999.99,
                  stock: 50,
                  isActive: true,
                  type: "PHYSICAL",
                  unit: "unidade",
                  mainImage: "https://exemplo.com/imagens/produto.jpg",
                  categories: [1, 2],
                  shortDescription: "Smartphone potente e elegante",
                  description:
                    "Smartphone XPTO com tela de 6.5 polegadas, 128GB de armazenamento.",
                  brand: "MarcaX",
                  model: "XPTO 2025",
                  color: "Preto",
                  size: "6.5 polegadas",
                  weight: 0.25,
                  images: [
                    {
                      url: "https://exemplo.com/imagens/produto1.jpg",
                      alt: "Vista frontal",
                    },
                  ],
                  tags: ["smartphone", "tecnologia"],
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Produto criado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Produto criado com sucesso",
                  },
                  product: { $ref: "#/components/schemas/Product" },
                },
              },
            },
          },
        },
        "400": {
          description: "Dados inválidos",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
      },
    },
  },
  "/product/{id}": {
    get: {
      summary: "Retorna um produto pelo ID",
      description: "Retorna os dados do produto específico pelo identificador.",
      tags: ["Produto"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico do produto a ser retornado",
        },
      ],
      responses: {
        "200": {
          description: "Produto encontrado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Product" },
            },
          },
        },
        "404": {
          description: "Produto não encontrado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
      },
    },
    put: {
      summary: "Atualiza um produto existente",
      description: "Atualiza os dados de um produto específico pelo ID.",
      tags: ["Produto"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico do produto a ser atualizado",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ProductUpdate" },
          },
        },
      },
      responses: {
        "200": {
          description: "Produto atualizado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Produto atualizado com sucesso",
                  },
                  product: { $ref: "#/components/schemas/Product" },
                },
              },
            },
          },
        },
        "404": {
          description: "Produto não encontrado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
      },
    },
    delete: {
      summary: "Remove um produto pelo ID",
      description: "Remove um produto específico pelo identificador.",
      tags: ["Produto"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico do produto a ser removido",
        },
      ],
      responses: {
        "204": {
          description: "Produto removido com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Produto removido com sucesso",
                  },
                },
                required: ["message"],
              },
            },
          },
        },
        "404": {
          description: "Produto não encontrado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          sku: { type: "string", example: "SKU123" },
          slug: { type: "string", example: "smartphone-xpto" },
          title: { type: "string", example: "Smartphone XPTO" },
          shortDescription: { type: "string" },
          description: { type: "string" },
          price: { type: "number", example: 1999.99 },
          stock: { type: "integer", example: 50 },
          unit: { type: "string", example: "unidade" },
          mainImage: { type: "string" },
          isActive: { type: "boolean" },
          type: { type: "string", enum: ["PHYSICAL", "DIGITAL"] },
          categories: {
            type: "array",
            items: { type: "integer" },
            example: [1, 2],
          },
        },
        required: [
          "id",
          "sku",
          "slug",
          "title",
          "price",
          "stock",
          "isActive",
          "type",
          "unit",
          "mainImage",
          "categories",
        ],
      },
      ProductCreate: {
        type: "object",
        properties: {
          sku: { type: "string", example: "SKU123" },
          slug: { type: "string", example: "smartphone-xpto" },
          title: { type: "string", example: "Smartphone XPTO" },
          price: { type: "number", example: 1999.99 },
          stock: { type: "integer", example: 50 },
          isActive: { type: "boolean", example: true },
          type: { type: "string", enum: ["PHYSICAL", "DIGITAL"] },
          unit: { type: "string", example: "unidade" },
          mainImage: {
            type: "string",
            example: "https://exemplo.com/imagem.jpg",
          },
          categories: {
            type: "array",
            items: { type: "integer" },
            example: [1, 2],
          },
          shortDescription: { type: "string", example: "Descrição curta" },
          description: { type: "string", example: "Descrição completa" },
          brand: { type: "string", example: "MarcaX" },
          model: { type: "string", example: "XPTO 2025" },
          color: { type: "string", example: "Preto" },
          size: { type: "string", example: "6.5 polegadas" },
          weight: { type: "number", example: 0.25 },
          tags: {
            type: "array",
            items: { type: "string" },
            example: ["smartphone", "tecnologia"],
          },
          images: {
            type: "array",
            items: {
              type: "object",
              properties: {
                url: { type: "string" },
                alt: { type: "string" },
              },
            },
          },
        },
        required: [
          "sku",
          "slug",
          "title",
          "price",
          "stock",
          "isActive",
          "type",
          "unit",
          "mainImage",
          "categories",
        ],
      },
      ErrorResponse: {
        type: "object",
        properties: {
          message: { type: "string", example: "Produto não encontrado" },
        },
        required: ["message"],
      },
    },
  },
  tags: [
    {
      name: "Produto",
      description: "Operações relacionadas a produtos",
    },
  ],
};

module.exports = productSwagger;
