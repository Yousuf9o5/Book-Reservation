import swaggerJSDoc from "swagger-jsdoc";

const parameters = [
  {
    in: "path",
    name: "id",
    required: true,
    schema: {
      type: "integer",
    },
    description: "ID of the user to update",
  },
];

/** @type {swaggerJSDoc.RequestBody} */
const requestBody = {
  description: "Book object to be created",
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
    description: "User updated successfully",
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
  401: {
    description: "Unauthorized. Invalid credentials provided.",
  },
  500: {
    description: "Internal server error. Failed to process the request.",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  put: {
    summary: "Update user by id",
    tags: ["Users"],
    parameters,
    requestBody,
    responses,
  },
};
