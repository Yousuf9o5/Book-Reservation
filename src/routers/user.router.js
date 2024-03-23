import { Router } from "express";
import {
  CreateUser,
  DeleteUserById,
  GetUserById,
  GetUsers,
  UpdateUserById,
} from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.get("/", GetUsers);
UserRouter.get("/:id", GetUserById);
UserRouter.post("/create", CreateUser);
UserRouter.put("/update/:id", UpdateUserById);
UserRouter.delete("/delete/:id", DeleteUserById);

export default UserRouter;
