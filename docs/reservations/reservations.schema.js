export default {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
      description: "The reservation's unique identifier",
    },
    reserve_end_on: {
      type: "string",
      format: "date-time",
      description: "The end date and time of the reservation",
    },
    user_id: {
      type: "integer",
      format: "int64",
      description: "The ID of the user associated with the reservation",
    },
    book_id: {
      type: "integer",
      format: "int64",
      description: "The ID of the book associated with the reservation",
    },
  },
};
