import { Router } from "express";
import {
  CreateBook,
  DeleteBookById,
  GetBookById,
  GetBooks,
  UpdateBookById,
} from "../controllers/book.controller.js";
import isAdmin from "../middlewares/is.admin.js";

const BookRouter = Router();

BookRouter.get("/", GetBooks);
BookRouter.get("/:id", GetBookById);
BookRouter.post("/create", isAdmin, CreateBook);
BookRouter.put("/update/:id", isAdmin, UpdateBookById);
BookRouter.delete("/delete/:id", isAdmin, DeleteBookById);

export default BookRouter;
