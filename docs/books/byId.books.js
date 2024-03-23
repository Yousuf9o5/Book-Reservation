import swaggerJSDoc from "swagger-jsdoc";

/** @type {swaggerJSDoc.Operation.parameters} */
const parameters = [
  {
    in: "path",
    name: "id",
    required: true,
    schema: {
      type: "integer",
    },
    description: "ID of the book to get",
  },
];

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
    description: "Done successfully",
    content: {
      "application/json": {
        example: example,
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
    summary: "Get book by id",
    tags: ["Books"],
    parameters,
    responses,
  },
};
