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
  404: {
    description: "Book not founded",
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
