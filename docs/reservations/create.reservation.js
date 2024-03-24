import swaggerJSDoc from "swagger-jsdoc";

const requestBody = {
  description: "Reservation object to be created",
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
    description: "Reservation created successfully",
    content: {
      "application/json": {
        example: {
          id: 1,
          reserve_end_on: "2019-05-17T00:00:00.000Z",
          createdAt: "2024-03-23T18:05:26.000Z",
          updatedAt: "2024-03-23T18:05:26.000Z",
          user_id: 1,
          book_id: 2,
        },
      },
    },
  },
  400: {
    description: "Bad request",
  },
  401: {
    description: "Unauthorized. Invalid credentials provided.",
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
