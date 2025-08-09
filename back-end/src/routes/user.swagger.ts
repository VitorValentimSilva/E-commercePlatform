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
                items: { $ref: "#/components/schemas/UserAllFields" },
              },
              examples: {
                exemplo1: {
                  summary: "Exemplo de lista de usuários",
                  value: [
                    {
                      id: 1,
                      email: "joao@email.com",
                      nameFull: "João Silva",
                      namePlace: "joaosilva",
                      password: "@Joao123",
                      createdAt: "2023-10-01T12:00:00Z",
                    },
                    {
                      id: 2,
                      email: "maria@email.com",
                      nameFull: "Maria Souza",
                      namePlace: "mariasouza",
                      password: "@Maria123",
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
    post: {
      summary: "Cria um novo usuário",
      description: "Cria um novo usuário com os dados fornecidos.",
      tags: ["Usuários"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/User" },
          },
        },
      },
      responses: {
        "201": {
          description: "Usuário criado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Usuário criado com sucesso",
                  },
                  user: { $ref: "#/components/schemas/UserAllFields" },
                },
                required: ["email", "nameFull", "namePlace", "password"],
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
              schema: { $ref: "#/components/schemas/UserAllFields" },
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
    put: {
      summary: "Atualiza um usuário existente",
      description: "Atualiza os dados de um usuário específico pelo ID.",
      tags: ["Usuários"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico do usuário a ser atualizado",
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/User" },
          },
        },
      },
      responses: {
        "200": {
          description: "Usuário atualizado com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Usuário atualizado com sucesso",
                  },
                  user: { $ref: "#/components/schemas/UserAllFields" },
                },
              },
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
    delete: {
      summary: "Remove um usuário pelo ID",
      description: "Remove um usuário específico pelo identificador.",
      tags: ["Usuários"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "integer", format: "int32" },
          description: "ID numérico do usuário a ser removido",
        },
      ],
      responses: {
        "204": {
          description: "Usuário removido com sucesso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Usuário removido com sucesso",
                  },
                },
                required: ["message"],
              },
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
      UserAllFields: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          email: { type: "string", example: "joao@email.com" },
          nameFull: { type: "string", example: "João Silva" },
          namePlace: { type: "string", example: "joaosilva" },
          password: { type: "string", example: "@Joao123" },
          createdAt: {
            type: "string",
            format: "date-time",
            example: "2023-10-01T12:00:00Z",
          },
        },
      },
      User: {
        type: "object",
        properties: {
          email: { type: "string", example: "joao@email.com" },
          nameFull: { type: "string", example: "João Silva" },
          namePlace: { type: "string", example: "joaosilva" },
          password: { type: "string", example: "@Joao123" },
        },
        required: ["email", "nameFull", "namePlace", "password"],
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
