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
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  get: {
    summary: "Get book by id",
    tags: ["Users"],
    parameters,
    responses,
  },
};
