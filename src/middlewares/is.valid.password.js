import { error } from "../utils/response.js";
import { passRegex } from "../utils/regex.js";
import express from "express";

/**
 * Validates the format of the password.
 * @param {express.Request} req - The request object containing the password or new password to validate.
 * @param {express.Response} res - The response object to send the result of the password validation.
 * @param {express.NextFunction} next - The next middleware function in the request-response cycle.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
async function isValidPassword(req, res, next) {
  try {
    const password = req.body?.password
      ? req.body.password
      : req.body.newPassword;

    const isValidPass = password.match(passRegex);

    if (!isValidPass) {
      return res.status(403).json(error(403, "Invalid password format"));
    }

    next();
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

export default isValidPassword;
