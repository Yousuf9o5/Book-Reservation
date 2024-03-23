export default {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
      description: "The user's unique identifier",
    },
    fullName: {
      type: "string",
      description: "The user's name",
    },
    email: {
      type: "string",
      format: "email",
      description: "The user's email address",
    },
    password: {
      type: "string",
      format: "string",
      description: "The user's password",
    },
    role: {
      type: "string",
      enum: ["user", "admin"],
      description: "The user's role",
    },
  },
};
