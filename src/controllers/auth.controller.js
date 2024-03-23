import express from "express";
import { error } from "../utils/response";

/**
 * Handles user signup.
 * @param {express.Request} req - The request object containing user signup data.
 * @param {express.Response} res - The response object to send the result of the signup operation.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function Signup(req, res) {
  try {
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Handles user signin.
 * @param {express.Request} req - The request object containing user signin data.
 * @param {express.Response} res - The response object to send the result of the signin operation.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function Signin(req, res) {
  try {
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
