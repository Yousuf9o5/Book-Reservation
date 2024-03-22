import { Router } from "express";
import { GetUsers } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.get("/", GetUsers);

export default UserRouter;
