import { error, success } from "@/src/utils/response.js";
import User from "database/schemas/user.schema";

export async function name(req, res) {
  try {
    const reservations = await User.findAll();

    return res.status(200).json(success(200, reservations, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
