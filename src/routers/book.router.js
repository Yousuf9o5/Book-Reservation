import { Router } from "express";
import {
  CreateBook,
  DeleteBookById,
  GetBookById,
  GetBooks,
  UpdateBookById,
} from "../controllers/book.controller.js";
import isAdmin from "../middlewares/is.admin.js";
import checkToken from "../middlewares/check.token.js";

const BookRouter = Router();

BookRouter.get("/", checkToken, GetBooks);
BookRouter.get("/:id", checkToken, GetBookById);
BookRouter.post("/create", [checkToken, isAdmin], CreateBook);
BookRouter.put("/update/:id", [checkToken, isAdmin], UpdateBookById);
BookRouter.delete("/delete/:id", [checkToken, isAdmin], DeleteBookById);

export default BookRouter;
