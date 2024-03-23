import { Router } from "express";
import {
  CreateBook,
  DeleteBookById,
  GetBookById,
  GetBooks,
  UpdateBookById,
} from "../controllers/book.controller.js";

const BookRouter = Router();

BookRouter.get("/", GetBooks);
BookRouter.get("/:id", GetBookById);
BookRouter.post("/create", CreateBook);
BookRouter.put("/update/:id", UpdateBookById);
BookRouter.delete("/delete/:id", DeleteBookById);

export default BookRouter;
