import express from "express";
import { error, success } from "../utils/response.js";
import {
  CreateUserService,
  GetUserByFieldsService,
  UpdateUserByIdService,
} from "../service/user.service.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secretKey = process.env.SECRET_KEY;

/**
 * Handles user signup.
 * @param {express.Request} req - The request object containing user signup data.
 * @param {express.Response} res - The response object to send the result of the signup operation.
 * @returns {Promise<express.Response<any, Record<string, any>>>} A promise representing the asynchronous operation.
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

    const token = jwt.sign({ id: user.getDataValue("id") }, secretKey);

    return res
      .status(201)
      .json(success(201, { token }, "User signed up successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Handles user signin.
 * @param {express.Request} req - The request object containing user signin data.
 * @param {express.Response} res - The response object to send the result of the signin operation.
 * @returns {Promise<express.Response<any, Record<string, any>>>} A promise representing the asynchronous operation.
 */
export async function Signin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const msg =
        "Invalid input data. Missing required fields or invalid format.";
      return res.status(400).json(error(400, msg, null));
    }

    const user = await GetUserByFieldsService({ email });

    if (!user) {
      const msg = "User Not Found";
      return res.status(404).json(error(404, msg, null));
    }

    const canPass = await bcrypt.compare(password, user.password);

    if (!canPass) {
      const msg = "Invalid password";
      return res.status(403).json(error(403, msg, null));
    }

    const token = jwt.sign({ id: user.id }, secretKey);

    return res
      .status(201)
      .json(success(201, { token: token }, "User signed up successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Updates the password of the current user.
 * @param {express.Request} req - The request object containing the current user's ID and the old and new passwords.
 * @param {express.Response} res - The response object to send the result of the password change operation.
 * @returns {Promise<express.Response<any, Record<string, any>>>} A promise representing the asynchronous operation.
 */
export async function ChangePassword(req, res) {
  try {
    const id = req.userId;
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      const msg = "Invalid input data. Missing required fields.";
      return res.status(400).json(error(400, msg, null));
    }

    const user = await GetUserByFieldsService({ id });

    if (!user) {
      const msg = "User Not Found";
      return res.status(404).json(error(404, msg, null));
    }

    const isValidPassword = await bcrypt.compare(oldPassword, user.password);

    if (!isValidPassword) {
      const msg = "Invalid password check your password and try again";
      return res.status(403).json(error(403, msg, null));
    }

    await UpdateUserByIdService(id, { password: newPassword });

    return res
      .status(200)
      .json(success(200, null, "Password Updated Successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
