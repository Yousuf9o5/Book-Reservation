import swaggerJSDoc from "swagger-jsdoc";

/** @type {swaggerJSDoc.Operation.parameters} */
const parameters = [
  {
    in: "query",
    name: "page",
    schema: {
      type: "integer",
      default: 1,
      minimum: 1,
    },
    description: "Offset for pagination (number of items to skip)",
  },
  {
    in: "query",
    name: "limit",
    schema: {
      type: "integer",
      default: 10,
      minimum: 1,
      maximum: 1000,
    },
    description: "Limit for pagination (maximum number of items to return)",
  },
];

const example = [
  {
    book_id: 1,
    name: "Book Title Generic Fresh Tuna",
    description:
      "Veritatis perferendis consequatur dolores qui ipsum nulla dolores quis. Ea laudantium et natus asperiores placeat voluptatem. Ea facere aut dolorum omnis quis velit. Quos aut quia illum rerum eum magnam mollitia cum numquam.",
    createdAt: "2024-03-22T23:29:22.000Z",
    updatedAt: "2024-03-22T23:29:22.000Z",
  },
  {
    book_id: 2,
    name: "Book Title Tasty Metal Chair",
    description:
      "Veritatis perferendis consequatur dolores qui ipsum nulla dolores quis. Ea laudantium et natus asperiores placeat voluptatem. Ea facere aut dolorum omnis quis velit. Quos aut quia illum rerum eum magnam mollitia cum numquam.",
    createdAt: "2024-03-22T23:29:22.000Z",
    updatedAt: "2024-03-22T23:29:22.000Z",
  },
];

/** @type {swaggerJSDoc.Responses} */
const responses = {
  200: {
    description: "Successful response",
    content: {
      "application/json": {
        example,
      },
    },
  },
  500: {
    description: "Internal server error. Failed to process the request.",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  get: {
    summary: "Get all books",
    tags: ["Books"],
    parameters: parameters,
    responses: responses,
  },
};
