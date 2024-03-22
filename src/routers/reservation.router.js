import { Router } from "express";
import { GetReservation } from "../controllers/reservation.controller.js";

const ReservationRouter = Router();

ReservationRouter.get("/", GetReservation);

export default ReservationRouter;
