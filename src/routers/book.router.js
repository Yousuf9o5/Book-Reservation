import { Router } from "express";
import { GetBooks } from "../controllers/book.controller.js";

const BookRouter = Router();

BookRouter.get("/", GetBooks);

export default BookRouter;
