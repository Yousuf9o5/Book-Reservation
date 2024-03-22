import Book from "database/schemas/book.schema";
import { error } from "src/utils/response";

export async function name(req, res) {
  try {
    const books = await Book.findAll();

    return res.status(200).json(success(200, books, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
