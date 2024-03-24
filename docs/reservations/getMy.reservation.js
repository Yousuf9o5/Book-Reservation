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
    name: "show",
    required: false,
    schema: {
      type: "string",
      enum: ["expired", "not expired"],
    },
  },
];

const example = [
  {
    id: 1,
    reserve_end_on: "2024-03-25T00:00:00.000Z",
    createdAt: "2024-03-24T00:43:47.000Z",
    updatedAt: "2024-03-24T00:43:47.000Z",
    user: {
      id: 1,
      fullName: "Yousif ahmed",
      email: "yousif@email.com",
      role: "admin",
    },
    book: {
      book_id: 1,
      name: "Book Title Small Plastic Shoes",
      description:
        "Voluptatem labore quibusdam quasi sit aperiam eius ullam. Id laudantium provident enim porro repudiandae blanditiis laborum alias dolor. Illum unde id quos eum. Cupiditate fugit aut doloremque explicabo laudantium et. Inventore molestiae numquam quae et rerum. Id explicabo animi iure quae quas nihil nihil temporibus dolorem.",
      createdAt: "2024-03-24T00:38:55.000Z",
      updatedAt: "2024-03-24T00:38:55.000Z",
    },
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
