import swaggerJSDoc from "swagger-jsdoc";

const requestBody = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          email: {
            type: "string",
            format: "email",
            description: "Email of the user",
          },
          password: {
            type: "string",
            description: "Password of the user",
          },
        },
        required: ["email", "password"],
      },
    },
  },
};

const responses = {
  200: {
    description: "User signed in successfully",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            token: {
              type: "string",
              description: "Authentication token for the user",
            },
          },
        },
      },
    },
  },
  400: {
    description:
      "Invalid input data. Missing required fields or invalid format.",
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
    summary: "Signin an existing user",
    description: "Signin endpoint for authenticating an existing user.",
    tags: ["Auth"],
    requestBody,
    responses,
  },
};
