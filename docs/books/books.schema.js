export default {
  type: "object",
  properties: {
    book_id: {
      type: "integer",
      format: "int64",
      description: "The book's unique identifier",
    },
    name: {
      type: "string",
      description: "The name of the book",
    },
    description: {
      type: "string",
      description: "The description of the book",
    },
  },
};
