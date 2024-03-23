import { Router } from "express";
import {
  CreateUser,
  DeleteUserById,
  GetUserById,
  GetUsers,
  UpdateUserById,
} from "../controllers/user.controller.js";
import isAdmin from "../middlewares/is.admin.js";
import isValidPassword from "../middlewares/is.valid.password.js";

const UserRouter = Router();

UserRouter.get("/", isAdmin, GetUsers);
UserRouter.get("/:id", isAdmin, GetUserById);
UserRouter.post("/create", [isAdmin, isValidPassword], CreateUser);
UserRouter.put("/update/:id", [isAdmin, isValidPassword], UpdateUserById);
UserRouter.delete("/delete/:id", isAdmin, DeleteUserById);

export default UserRouter;
