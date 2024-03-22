import Book from "../../database/schemas/book.schema.js";
import { error, success } from "../utils/response.js";

export async function GetBooks(req, res) {
  try {
    const books = await Book.findAll();

    return res.status(200).json(success(200, books, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
