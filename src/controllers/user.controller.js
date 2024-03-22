import User from "../../database/schemas/user.schema.js";
import { error, success } from "../utils/response.js";

export async function GetUsers(req, res) {
  try {
    const reservations = await User.findAll();

    return res.status(200).json(success(200, reservations, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
