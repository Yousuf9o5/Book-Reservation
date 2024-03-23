import {
  CreateBookService,
  GetBookService,
  GetBooksService,
} from "../service/book.service.js";
import { error, success } from "../utils/response.js";
import express from "express";

/**
 * @param {express.Request} req
 * @param {express.Response} res
 *  */
export async function GetBooks(req, res) {
  try {
    const limit = +req.query.limit || 10;
    const offset = (+req.query.page - 1) * limit || 1;

    const { books, totalPages } = await GetBooksService({ limit, offset });

    return res.status(200).json(success(200, { books, totalPages }, "Done"));
  } catch (err) {
    console.log(err);
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 *  */
export async function GetBookById(req, res) {
  try {
    const book = await GetBookService(req.params.id);

    if (!book) {
      return res.status(404).json(error(404, book, "Not Found"));
    }

    return res.status(200).json(success(200, book, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 *  */
export async function CreateBook(req, res) {
  try {
    const { name, description } = req.body;

    if (!name || description) {
      return res
        .status(400)
        .json(
          error(400, "Failed to create book. Please check your input.", null)
        );
    }

    const book = await CreateBookService({ ...req.body });

    return res
      .status(200)
      .json(success(200, book, "Book Created Successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
