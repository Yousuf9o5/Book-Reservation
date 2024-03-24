import { GetBookByFieldsService } from "../service/book.service.js";
import {
  CreateReservationService,
  GetReservationByFieldsService,
  GetReservationsService,
} from "../service/reservation.service.js";
import { GetUserByIdService } from "../service/user.service.js";
import { isValidDate } from "../utils/isValidDate.js";
import { error, success } from "../utils/response.js";
import express from "express";

/**
 * Retrieves reservations based on specified query parameters.
 * @param {express.Request} req - The request object containing query parameters for filtering and pagination.
 * @param {express.Response} res - The response object to send the list of reservations.
 * @returns {Promise<express.Response<any, Record<string, any>>>} A promise representing the asynchronous operation.
 */
export async function GetReservation(req, res) {
  try {
    const { user_id = "", book_id = "", show } = req.query;
    const limit = Number(req.query.limit) || 10;
    const offset = (Number(req.query.page) - 1) * limit || 1;

    const reservations = await GetReservationsService({
      limit,
      offset,
      search: {
        bookId: book_id,
        userId: user_id,
      },
      show: show,
    });

    return res.status(200).json(success(200, reservations, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Retrieves reservations made by the authenticated user.
 * @param {express.Request} req - The request object containing query parameters for filtering and pagination.
 * @param {express.Response} res - The response object to send the list of reservations.
 * @returns {Promise<express.Response<any, Record<string, any>>>} A promise representing the asynchronous operation.
 */
export async function GetMyReservation(req, res) {
  try {
    const { book_id = "", show } = req.query;
    const limit = Number(req.query.limit) || 10;
    const offset = (Number(req.query.page) - 1) * limit || 1;

    const reservations = await GetReservationsService({
      limit,
      offset,
      search: {
        bookId: book_id,
        userId: req.userId,
      },
      show: show,
    });

    return res.status(200).json(success(200, reservations, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Reserves a book for the authenticated user.
 * @param {express.Request} req - The request object containing user ID and book ID to reserve.
 * @param {express.Response} res - The response object to send the result of the reservation operation.
 * @returns {Promise<express.Response<any, Record<string, any>>>} A promise representing the asynchronous operation.
 */
export async function ReserveBook(req, res) {
  try {
    const id = req.userId;
    const { book_id } = req.body;
    const reserveEndDat = req.body.date_reserve_end;

    if (!book_id) {
      const msg = "Invalid Input please enter book id";
      return res.status(400).json(error(400, msg));
    }

    if (!isValidDate(reserveEndDat)) {
      const msg =
        "Invalid date please enter a valid date or invalid date Required: (YYYY-MM-DD).";
      return res.status(400).json(error(400, msg));
    }

    const user = await GetUserByIdService(id);
    if (!user) {
      return res.status(404).json(error(404, "User Not Found"));
    }

    const isExists = await GetReservationByFieldsService({ book_id });
    if (isExists) {
      return res.status(400).json(error(400, "Book Already Reserved"));
    }

    const book = await GetBookByFieldsService({ book_id });

    if (!book) {
      return res.status(404).json(error(404, "Book Not Found"));
    }

    const reservation = await CreateReservationService({
      reserve_end_on: reserveEndDat,
      User: user,
      Book: book,
    });

    return res.status(200).json(success(200, reservation, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
