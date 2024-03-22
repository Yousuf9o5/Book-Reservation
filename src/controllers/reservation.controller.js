import Reservation from "../../database/schemas/reservations.schema.js";
import { error, success } from "../utils/response.js";

export async function GetReservation(req, res) {
  try {
    const reservations = await Reservation.findAll();

    return res.status(200).json(success(200, reservations, "Done"));
  } catch (err) {
    return res.status(500).json(error(500, "Server Side Error", null));
  }
}
