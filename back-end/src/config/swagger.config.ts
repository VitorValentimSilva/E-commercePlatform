const userSwagger = require("../routes/user.swagger");
const categorySwagger = require("../routes/category.swagger");
const productSwagger = require("../routes/product.swagger");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API do E-commerce Platform",
    version: "1.0.0",
    description: "Documentação da API do E-commerce Platform",
  },
  servers: [{ url: "http://localhost:3000" }],
  tags: [...userSwagger.tags, ...categorySwagger.tags, ...productSwagger.tags],
  paths: {
    ...userSwagger,
    ...categorySwagger,
    ...productSwagger,
  },
  components: {
    schemas: {
      ...userSwagger.components.schemas,
      ...categorySwagger.components.schemas,
      ...productSwagger.components.schemas,
    },
  },
};

module.exports = swaggerDefinition;
