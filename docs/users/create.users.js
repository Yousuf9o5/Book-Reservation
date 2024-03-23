import swaggerJSDoc from "swagger-jsdoc";

const requestBody = {
  description: "User object to be created",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          fullName: {
            type: "string",
            example: "John Doe",
          },
          email: {
            type: "string",
            example: "john@example.com",
          },
          password: {
            type: "string",
            example: "password123",
          },
          role: {
            type: "string",
            enum: ["user", "admin"],
            example: "user",
          },
        },
        required: ["name", "description"],
      },
    },
  },
};

const responses = {
  201: {
    description: "User created successfully",
    content: {
      "application/json": {
        example: {
          id: 1,
          fullName: "John Doe",
          email: "john@example.com",
          password: "password123",
          role: "admin",
        },
      },
    },
  },
  400: {
    description: "Bad request",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  post: {
    summary: "Create a new book",
    tags: ["users"],
    parameters: [],
    requestBody,
    responses,
  },
};
