import swaggerJSDoc from "swagger-jsdoc";

const requestBody = {
  description: "Book object to be created",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          book_id: {
            type: "string",
          },
          date_reserve_end: {
            type: "date",
            pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/,
            example: "2019-05-17",
          },
        },
        required: ["book_id", "date_reserve_end"],
      },
    },
  },
};

const responses = {
  201: {
    description: "Book created successfully",
    content: {
      "application/json": {
        example: [
          {
            id: 1,
            reserve_end_on: "2019-05-17T00:00:00.000Z",
            is_expired: false,
            createdAt: "2024-03-23T18:05:26.000Z",
            updatedAt: "2024-03-23T18:05:26.000Z",
            user: {
              id: 3,
              fullName: "Yousif ahmed",
              email: "yousif@email.com",
              role: "admin",
            },
            book: {
              book_id: 4,
              name: "Book Title Ergonomic Fresh Chair",
              description:
                "Iusto delectus nostrum fuga architecto iure. Quasi ut temporibus suscipit. Fugit alias sed error. Est autem sint. Rem doloribus et. Quaerat qui quia eos neque aut.",
              createdAt: "2024-03-23T14:06:51.000Z",
              updatedAt: "2024-03-23T14:06:51.000Z",
            },
          },
          {
            id: 3,
            reserve_end_on: "2024-02-11T21:00:00.000Z",
            is_expired: false,
            createdAt: "2024-03-23T19:12:15.000Z",
            updatedAt: "2024-03-23T19:12:15.000Z",
            user: {
              id: 3,
              fullName: "Yousif ahmed",
              email: "yousif@email.com",
              role: "admin",
            },
            book: {
              book_id: 12,
              name: "Book Title Practical Frozen Hat",
              description:
                "Consectetur suscipit nihil illo. Ut sit non dolorem maxime aut. Repellat aut maiores. Repellat voluptates aut sit quasi. Esse sed sunt quia quod.",
              createdAt: "2024-03-23T14:06:51.000Z",
              updatedAt: "2024-03-23T14:06:51.000Z",
            },
          },
        ],
      },
    },
  },
  400: {
    description: "Bad request",
  },
  500: {
    description: "Internal server error. Failed to process the request.",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  post: {
    summary: "Reserve A book",
    tags: ["Reservations"],
    parameters: [],
    requestBody,
    responses,
  },
};
