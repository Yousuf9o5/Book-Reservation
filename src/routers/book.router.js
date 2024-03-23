import { Router } from "express";
import {
  CreateBook,
  GetBookById,
  GetBooks,
} from "../controllers/book.controller.js";

const BookRouter = Router();

BookRouter.get("/", GetBooks);
BookRouter.get("/:id", GetBookById);
BookRouter.post("/create", CreateBook);

export default BookRouter;
