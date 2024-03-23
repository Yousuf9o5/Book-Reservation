import {
  CreateBookService,
  GetBookService,
  GetBooksService,
  UpdateBookService,
} from "../service/book.service.js";
import { error, success } from "../utils/response.js";
import express from "express";

/**
 * Retrieves a paginated list of books.
 * @param {express.Request} req - The request object containing query parameters for pagination.
 * @param {express.Response} res - The response object to send the list of books.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function GetBooks(req, res) {
  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit || 1;
    const search = req.query.search || "";

    const { books, totalPages } = await GetBooksService({
      limit,
      offset,
      search,
    });

    return res.status(200).json(success(200, { books, totalPages }, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Retrieves a book by its ID.
 * @param {express.Request} req - The request object containing the book ID as a parameter.
 * @param {express.Response} res - The response object to send the book data.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function GetBookById(req, res) {
  try {
    const book = await GetBookService(req.params.id);

    if (!book) {
      return res.status(404).json(error(404, book, "Not Found"));
    }

    return res.status(200).json(success(204, book, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Creates a new book.
 * @param {express.Request} req - The request object containing book data in the request body.
 * @param {express.Response} res - The response object to send the created book data.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function CreateBook(req, res) {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json(
          error(400, "Failed to create book. Please check your input.", null)
        );
    }

    const book = await CreateBookService({ ...req.body });

    return res
      .status(201)
      .json(success(201, book, "Book Created Successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Updates a book by its ID.
 * @param {express.Request} req - The request object containing the book ID as a parameter and updated book data in the request body.
 * @param {express.Response} res - The response object to send the updated book data.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function UpdateBookById(req, res) {
  try {
    const id = req.params.id;

    if (!id) {
      const msg = "You Must Enter Id of the Book";
      return res.status(400).json(error(400, msg, null));
    }

    if (!req.body.name && !req.body.description) {
      const msg = "No Fields Where Entered";
      return res.status(304).json(error(304, msg, null));
    }

    const book = await UpdateBookService(id, { ...req.body });

    return res
      .status(200)
      .json(success(200, book, "Book Was Updated Successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Deletes a book by its ID.
 * @param {express.Request} req - The request object containing the book ID as a parameter.
 * @param {express.Response} res - The response object to send the result of the deletion operation.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function DeleteBookById(req, res) {
  try {
    const book = await GetBookService(req.params.id);

    if (!book) {
      return res.status(404).json(error(404, book, "Not Found"));
    }

    await book.destroy();

    return res.status(200).json(success(204, {}, "Book Deleted Successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
