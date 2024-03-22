import swaggerJSDoc from "swagger-jsdoc";

/** @type {swaggerJSDoc.Tag[]} */
const tags = [
  {
    name: "books",
  },
];

/** @type {swaggerJSDoc.Options} */
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
    },
    security: [{ bearerAuth: [] }],
    info: {
      title: "My API",
      version: "1.0.0",
      description: "A sample API for learning Swagger",
    },
    servers: [
      { url: "http://localhost:3000", description: "Development Server" },
    ],
    tags: tags,
    paths: {
      // api here
    },
  },
  apis: [],
};

export default swaggerOptions;
