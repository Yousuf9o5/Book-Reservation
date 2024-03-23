import express from "express";
import {
  CreateUserService,
  DeleteUserByIdService,
  GetUserByFieldsService,
  GetUserByIdService,
  GetUsersService,
  UpdateUserByIdService,
} from "../service/user.service.js";
import { error, success } from "../utils/response.js";

/**
 * Retrieves a paginated list of users.
 * @param {express.Request} req - The request object containing query parameters for pagination.
 * @param {express.Response} res - The response object to send the list of users.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function GetUsers(req, res) {
  try {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit || 1;
    const search = req.query.search || "";

    const { users, totalPages } = await GetUsersService({
      limit,
      offset,
      search,
    });

    return res.status(200).json(success(200, { users, totalPages }, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Retrieves a user by their ID.
 * @param {express.Request} req - The request object containing the user ID as a parameter.
 * @param {express.Response} res - The response object to send the user data.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function GetUserById(req, res) {
  try {
    const user = await GetUserByIdService(req.params.id);

    if (!user) {
      return res.status(404).json(error(404, "User Not Found", user));
    }

    return res.status(200).json(success(200, user, "User Found"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Creates a new user.
 * @param {express.Request} req - The request object containing user data in the request body.
 * @param {express.Response} res - The response object to send the created user data.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function CreateUser(req, res) {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password || !role) {
      const msg = "Failed to create user. Please provide all required fields.";
      return res.status(400).json(error(400, msg, null));
    }

    const isExists = await GetUserByFieldsService({ email });

    if (isExists) {
      const msg = "The Email is invalid please try another one.";
      return res.status(400).json(error(400, msg, null));
    }

    const user = await CreateUserService(req.body);

    return res
      .status(201)
      .json(success(201, user, "User Created Successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Updates a user by their ID.
 * @param {express.Request} req - The request object containing the user ID as a parameter and updated user data in the request body.
 * @param {express.Response} res - The response object to send the updated user data.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function UpdateUserById(req, res) {
  try {
    const id = req.params.id;

    if (!id) {
      const msg = "You Must Enter Id of the User";
      return res.status(400).json(error(400, msg, null));
    }

    const isExists = await GetUserByFieldsService({
      email: req.body.email,
    });

    if (isExists) {
      return res.status(400).json(error(400, "email is already in use"));
    }

    const user = await UpdateUserByIdService(id, req.body);

    if (!user) {
      return res.status(404).json(error(404, "User Not Found", user));
    }

    return res
      .status(200)
      .json(success(200, user, "User Was Updated Successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}

/**
 * Deletes a user by their ID.
 * @param {express.Request} req - The request object containing the user ID as a parameter.
 * @param {express.Response} res - The response object to send the result of the deletion operation.
 * @returns {Promise<void>} A promise representing the asynchronous operation.
 */
export async function DeleteUserById(req, res) {
  try {
    const user = await GetUserByIdService(req.params.id);

    if (!user) {
      return res.status(404).json(error(404, "User Not Found", user));
    }

    const deleted = await DeleteUserByIdService(req.params.id);

    if (!deleted) {
      return res.status(500).json(error(500, "Failed to delete user", null));
    }

    return res.status(200).json(success(200, {}, "User Deleted Successfully"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
