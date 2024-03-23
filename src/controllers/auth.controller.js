import express from "express";
import { error } from "../utils/response";
import {
  CreateUserService,
  GetUserByFieldsService,
} from "../service/user.service";
import { sign } from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

/**
 * Handles user signup.
 * @param {express.Request} req - The request object containing user signup data.
 * @param {express.Response} res - The response object to send the result of the signup operation.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function Signup(req, res) {
  try {
    const { email } = req.body;

    const isExists = await GetUserByFieldsService({ email });

    if (isExists) {
      const msg = "The Email is invalid please try another one.";
      return res.status(400).json(error(400, msg, null));
    }

    const user = await CreateUserService(req.body);

    console.log(user.getAttributes("id"));

    // const jwt = sign({ id: user.getAttributes("id") }, secretKey);

    return res
      .status(201)
      .json(success(201, null, "User signed up successfully"));
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
