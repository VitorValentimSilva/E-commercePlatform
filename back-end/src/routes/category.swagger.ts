const categorySwagger = {
  "/category": {
    get: {
      summary: "Retorna todos as categorias cadastrados",
      description: "Retorna uma lista completa com os dados das categorias.",
      tags: ["Categoria"],
      responses: {
        "200": {
          description: "Lista de categorias",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Category" },
              },
              examples: {
                exemplo1: {
                  summary: "Exemplo de lista de categoria",
                  value: [
                    {
                      id: 1,
                      name: "Eletrônicos",
                      parentId: null,
                      path: "eletronicos",
                      level: 0,
                      order: 1,
                      isActive: true,
                      imageUrl: "https://exemplo.com/imagens/eletronicos.jpg",
                      metaTitle: "Compre Eletrônicos",
                      metaDescription: "Ofertas em TVs, celulares e muito mais",
                      createdAt: "2025-08-11T10:00:00Z",
                      updatedAt: "2025-08-11T10:00:00Z",
                    },
                    {
                      id: 2,
                      name: "Celulares",
                      parentId: 1,
                      path: "eletronicos/celulares",
                      level: 1,
                      order: 1,
                      isActive: true,
                      imageUrl: "https://exemplo.com/imagens/celulares.jpg",
                      metaTitle: "Smartphones e Celulares",
                      metaDescription: "As melhores marcas de smartphones",
                      createdAt: "2025-08-11T10:05:00Z",
                      updatedAt: "2025-08-11T10:05:00Z",
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    post: {
      summary: "Cria uma nova categoria",
      description: "Cria uma nova categoria com os dados fornecidos.",
      tags: ["Categoria"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CategoryCreate" },
          },
        },
      },
      responses: {
        "201": {
          description: "Categoria criado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Categoria criado com sucesso",
                  },
                  category: { $ref: "#/components/schemas/Category" },
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
  "/category/{id}": {
    get: {
      summary: "Retorna uma categoria pelo ID",
      description:
        "Retorna os dados da categoria específico pelo identificador.",
      tags: ["Categoria"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico da categoria a ser retornado",
        },
      ],
      responses: {
        "200": {
          description: "Categoria encontrado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Category" },
            },
          },
        },
        "404": {
          description: "Categoria não encontrado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
      },
    },
    put: {
      summary: "Atualiza uma categoria existente",
      description: "Atualiza os dados de uma categoria específico pelo ID.",
      tags: ["Categoria"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico da categoria a ser atualizado",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CategoryUpdate" },
          },
        },
      },
      responses: {
        "200": {
          description: "Categoria atualizado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Categoria atualizado com sucesso",
                  },
                  category: { $ref: "#/components/schemas/Category" },
                },
              },
            },
          },
        },
        "404": {
          description: "Categoria não encontrado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
      },
    },
    delete: {
      summary: "Remove uma categoria pelo ID",
      description: "Remove uma categoria específico pelo identificador.",
      tags: ["Categoria"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico da categoria a ser removido",
        },
      ],
      responses: {
        "204": {
          description: "Categoria removido com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Categoria removido com sucesso",
                  },
                },
                required: ["message"],
              },
            },
          },
        },
        "404": {
          description: "Categoria não encontrado",
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
      Category: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          name: { type: "string", example: "Eletrônicos" },
          parentId: { type: "integer", nullable: true, example: null },
          path: { type: "string", nullable: true, example: "eletronicos" },
          level: { type: "integer", example: 0 },
          order: { type: "integer", example: 1 },
          isActive: { type: "boolean", example: true },
          imageUrl: {
            type: "string",
            nullable: true,
            example: "https://exemplo.com/imagens/eletronicos.jpg",
          },
          metaTitle: {
            type: "string",
            nullable: true,
            example: "Compre Eletrônicos",
          },
          metaDescription: {
            type: "string",
            nullable: true,
            example: "Ofertas em TVs, celulares e muito mais",
          },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
        required: ["id", "name", "isActive", "createdAt", "updatedAt"],
      },
      CategoryCreate: {
        type: "object",
        properties: {
          name: { type: "string", example: "Eletrônicos" },
          parentId: { type: "integer", nullable: true, example: null },
          path: { type: "string", example: "eletronicos" },
          level: { type: "integer", example: 0 },
          order: { type: "integer", example: 1 },
          isActive: { type: "boolean", example: true },
          imageUrl: {
            type: "string",
            nullable: true,
            example: "https://exemplo.com/imagens/eletronicos.jpg",
          },
          metaTitle: {
            type: "string",
            nullable: true,
            example: "Compre Eletrônicos",
          },
          metaDescription: {
            type: "string",
            nullable: true,
            example: "Ofertas em TVs, celulares e muito mais",
          },
        },
        required: ["name"],
      },
      CategoryUpdate: {
        type: "object",
        properties: {
          name: { type: "string", example: "Eletrônicos Atualizado" },
          parentId: { type: "integer", nullable: true, example: null },
          path: { type: "string", example: "eletronicos" },
          level: { type: "integer", example: 0 },
          order: { type: "integer", example: 1 },
          isActive: { type: "boolean", example: true },
          imageUrl: {
            type: "string",
            nullable: true,
            example: "https://exemplo.com/imagens/eletronicos.jpg",
          },
          metaTitle: {
            type: "string",
            nullable: true,
            example: "Compre Eletrônicos",
          },
          metaDescription: {
            type: "string",
            nullable: true,
            example: "Ofertas em TVs, celulares e muito mais",
          },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          message: { type: "string", example: "Categoria não encontrado" },
        },
        required: ["message"],
      },
    },
  },
  tags: [
    {
      name: "Categoria",
      description: "Operações relacionadas a categoria",
    },
  ],
};

module.exports = categorySwagger;
