import { error } from "../utils/response.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../../database/schemas/user.schema.js";
import express from "express";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

/**
 * Middleware to check and validate JWT token from request headers.
 * @param {express.Request} req - The request object containing JWT token in the headers.
 * @param {express.Response} res - The response object to send the result of the token validation.
 * @param {express.NextFunction} next - The next middleware function in the request-response cycle.
 * @returns {Promise<void | express.Response<any, Record<string, any>>>} A promise representing the asynchronous operation.
 */
async function checkToken(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) throw "Not Authorized";

    const decodeData = jwt.verify(token, secretKey);

    if (!decodeData) throw "Not Authorized";

    const user = await User.findByPk(decodeData.id);

    if (!user) throw "Not Authorized";

    req.userId = user.getDataValue("id");

    next();
  } catch (err) {
    return res.status(401).json(error(401, "Not Authorized"));
  }
}

export default checkToken;
