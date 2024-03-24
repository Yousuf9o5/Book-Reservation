import swaggerJSDoc from "swagger-jsdoc";

const parameters = [
  {
    in: "path",
    name: "id",
    required: true,
    schema: {
      type: "integer",
    },
    description: "ID of the user to get",
  },
];

const responses = {
  200: {
    description: "Done successfully",
    content: {
      "application/json": {
        example: {
          id: 1,
          fullName: "John Doe",
          email: "john@example.com",
          password: "password123",
          role: "user",
        },
      },
    },
  },
  404: {
    description: "Not found",
  },
  500: {
    description: "Internal server error. Failed to process the request.",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  get: {
    summary: "Get user by id",
    tags: ["Users"],
    parameters,
    responses,
  },
};
