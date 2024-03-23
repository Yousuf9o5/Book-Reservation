import swaggerJSDoc from "swagger-jsdoc";

const parameters = [
  {
    in: "path",
    name: "id",
    required: true,
    schema: {
      type: "integer",
    },
    description: "ID of the book to update",
  },
];

/** @type {swaggerJSDoc.RequestBody} */
const requestBody = {
  description: "Book object to be updated",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "Book Title",
          },
          description: {
            type: "string",
            example: "Description of the book",
          },
          description: {
            type: "string",
            example: "Description of the book",
          },
        },
        required: ["name", "description"],
      },
    },
  },
};

const responses = {
  200: {
    description: "User Updated successfully",
    content: {
      "application/json": {
        example: {
          id: 1,
          fullName: "Abbas",
          email: "Abbas@email.com",
          password: "password",
          role: "user",
        },
      },
    },
  },
  400: {
    description: "Failed to update user. Please check your input.",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  put: {
    summary: "Update book by id",
    tags: ["books"],
    parameters,
    requestBody,
    responses,
  },
};
