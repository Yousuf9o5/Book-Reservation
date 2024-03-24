import { Router } from "express";
import {
  GetMyReservation,
  GetReservation,
  ReserveBook,
} from "../controllers/reservation.controller.js";
import checkToken from "../middlewares/check.token.js";
import isAdmin from "../middlewares/is.admin.js";

const ReservationRouter = Router();

ReservationRouter.get("/", [checkToken, isAdmin], GetReservation);
ReservationRouter.get("/my_reservations", checkToken, GetMyReservation);
ReservationRouter.post("/create", checkToken, ReserveBook);

export default ReservationRouter;
