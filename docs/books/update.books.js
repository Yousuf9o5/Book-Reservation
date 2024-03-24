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
        },
        required: ["name", "description"],
      },
    },
  },
};

const example = {
  book_id: 1,
  name: "Book Title Generic Fresh Tuna",
  description:
    "Veritatis perferendis consequatur dolores qui ipsum nulla dolores quis. Ea laudantium et natus asperiores placeat voluptatem. Ea facere aut dolorum omnis quis velit. Quos aut quia illum rerum eum magnam mollitia cum numquam.",
  createdAt: "2024-03-22T23:29:22.000Z",
  updatedAt: "2024-03-22T23:29:22.000Z",
};

const responses = {
  200: {
    description: "Book Updated successfully",
    content: {
      "application/json": {
        example: example,
      },
    },
  },
  304: {
    description: "No Fields were Entered",
  },
  400: {
    description: "Bad Request: You must enter the ID of the book.",
  },
  401: {
    description: "Unauthorized. Invalid credentials provided.",
  },
  500: {
    description: "Internal server error. Failed to process the request.",
  },
};

export default {
  put: {
    summary: "Update book by ID",
    tags: ["Books"],
    parameters,
    requestBody,
    responses,
  },
};
