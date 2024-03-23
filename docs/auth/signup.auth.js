import swaggerJSDoc from "swagger-jsdoc";

const requestBody = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          fullName: {
            type: "string",
            format: "string",
            description: "Email of the user to be registered",
          },
          email: {
            type: "string",
            format: "email",
            description: "Email of the user to be registered",
          },
          password: {
            type: "string",
            description: "Password of the user to be registered",
          },
        },
        required: ["email", "password"],
      },
    },
  },
};

const responses = {
  201: {
    description: "User signed up successfully",
  },
  400: {
    description:
      "Invalid input data. Missing required fields or invalid format.",
  },
  500: {
    description: "Internal server error. Failed to process the request.",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  post: {
    summary: "Signup a new user",
    description: "Signup endpoint for registering a new user.",
    tags: ["Auth"],
    requestBody,
    responses,
  },
};
