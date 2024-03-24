import swaggerJSDoc from "swagger-jsdoc";

const parameters = [
  {
    in: "path",
    name: "id",
    required: true,
    schema: {
      type: "integer",
    },
    description: "ID of the book to delete",
  },
];

const responses = {
  204: {
    description: "Book Deleted successfully",
  },
  401: {
    description: "Unauthorized. Invalid credentials provided.",
  },
  404: {
    description: "Book not founded",
  },
  500: {
    description: "Internal server error. Failed to process the request.",
  },
};

/** @type {swaggerJSDoc.PathItem} */
export default {
  delete: {
    summary: "Delete book by id",
    tags: ["Books"],
    parameters,
    responses,
  },
};
