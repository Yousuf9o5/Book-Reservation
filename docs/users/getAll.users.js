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
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    password: "password123",
    role: "admin",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    email: "jane@example.com",
    password: "securepassword",
    role: "user",
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
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  get: {
    summary: "Get all users",
    tags: ["users"],
    parameters: parameters,
    responses: responses,
  },
};