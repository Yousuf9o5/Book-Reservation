import Reservation from "database/schemas/reservations.schema.js";
import { error } from "src/utils/response.js";

export async function name(req, res) {
  try {
    const reservations = await Reservation.findAll();

    return res.status(200).json(success(200, reservations, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
