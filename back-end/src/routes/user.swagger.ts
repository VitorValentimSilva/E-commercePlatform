const userSwagger = {
  "/user": {
    get: {
      summary: "Retorna todos os usuários cadastrados",
      description:
        "Retorna uma lista completa com os dados básicos dos usuários.",
      tags: ["Usuários"],
      responses: {
        "200": {
          description: "Lista de usuários",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/User" },
              },
              examples: {
                exemplo1: {
                  summary: "Exemplo de lista de usuários",
                  value: [
                    {
                      id: 1,
                      email: "joao@email.com",
                      password: "@Joao123",
                      name: "João Silva",
                      createdAt: "2023-10-01T12:00:00Z",
                    },
                    {
                      id: 2,
                      email: "maria@email.com",
                      password: "@Maria123",
                      name: "Maria Souza",
                      createdAt: "2023-10-02T12:00:00Z",
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
  "/user/{id}": {
    get: {
      summary: "Retorna um usuário pelo ID",
      description: "Retorna os dados do usuário específico pelo identificador.",
      tags: ["Usuários"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico do usuário a ser retornado",
        },
      ],
      responses: {
        "200": {
          description: "Usuário encontrado",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        "404": {
          description: "Usuário não encontrado",
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
      User: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          email: { type: "string", example: "joao@email.com" },
          password: { type: "string", example: "@Joao123" },
          name: { type: "string", example: "João Silva" },
          createdAt: {
            type: "string",
            format: "date-time",
            example: "2023-10-01T12:00:00Z",
          },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          message: { type: "string", example: "Usuário não encontrado" },
        },
        required: ["message"],
      },
    },
  },
  tags: [
    {
      name: "Usuários",
      description: "Operações relacionadas a usuários",
    },
  ],
};

module.exports = userSwagger;
