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
  {
    in: "query",
    name: "user_id",
    schema: {
      type: "string",
    },
    description: "Search by user id",
  },
  {
    in: "query",
    name: "book_id",
    schema: {
      type: "string",
    },
    description: "Search by book id",
  },
  {
    in: "query",
    name: "show",
    required: false,
    schema: {
      type: "string",
      enum: ["expired", "not expired"],
    },
    description: "chose show type",
  },
];

const example = [
  {
    id: 1,
    reserve_end_on: "2024-03-23",
    is_expired: "false",
    user_id: "3",
    book_id: "2",
    createdAt: "2024-03-23 14:06:51",
    updatedAt: "2024-03-23 14:06:51",
  },
  {
    id: 2,
    reserve_end_on: "2024-03-23",
    is_expired: "false",
    user_id: "1",
    book_id: "2",
    createdAt: "2024-03-23 14:06:51",
    updatedAt: "2024-03-23 14:06:51",
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
    summary: "Get all users",
    tags: ["Reservations"],
    parameters: parameters,
    responses: responses,
  },
};
