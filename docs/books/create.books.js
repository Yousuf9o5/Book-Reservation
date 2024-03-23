import swaggerJSDoc from "swagger-jsdoc";

const requestBody = {
  description: "Book object to be created",
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
        },
        required: ["name", "description"],
      },
    },
  },
};

const responses = {
  201: {
    description: "Book created successfully",
    content: {
      "application/json": {
        example: {
          book_id: 3,
          name: "Book Title",
          description: "Description of the book",
          createdAt: "2024-03-23T12:00:00.000Z",
          updatedAt: "2024-03-23T12:00:00.000Z",
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
    tags: ["books"],
    parameters: [],
    requestBody,
    responses,
  },
};
