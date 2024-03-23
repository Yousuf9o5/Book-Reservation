import express from "express";
import { GetUserByFieldsService } from "../service/user.service.js";
import { error } from "../utils/response.js";

/**
 * Middleware to check if the user is an admin.
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 * @param {express.NextFunction} next - The next function to call in the middleware chain.
 * @returns {void}
 */
async function isAdmin(req, res, next) {
  try {
    const user = await GetUserByFieldsService({ id: req.userId });

    if (user.role != "admin") {
      throw new Error();
    }

    next();
  } catch (err) {
    return res.status(401).json(error(401, "Not Authorized"));
  }
}

export default isAdmin;
