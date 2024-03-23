import swaggerJSDoc from "swagger-jsdoc";

const requestBody = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          oldPassword: {
            type: "string",
            description: "Old password of the user",
          },
          newPassword: {
            type: "string",
            description: "Password of the user",
          },
        },
        required: ["oldPassword", "newPassword"],
      },
    },
  },
};

const responses = {
  200: {
    description: "Password updated successfully",
  },
  400: {
    description: "Invalid input data. Missing required fields.",
  },
  401: {
    description: "Unauthorized. Invalid credentials provided.",
  },
  403: {
    description: "Invalid password.",
  },
  404: {
    description: "User not found.",
  },
  500: {
    description: "Internal server error. Failed to process the request.",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  put: {
    summary: "Change user password",
    description:
      "Endpoint to update the password for an authenticated user account.",
    tags: ["Auth"],
    requestBody,
    responses,
  },
};
