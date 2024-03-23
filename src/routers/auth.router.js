import { Router } from "express";
import {
  Signin,
  Signup,
  ChangePassword,
} from "../controllers/auth.controller.js";
import checkToken from "../middlewares/check.token.js";
import isValidPassword from "../middlewares/is.valid.password.js";

const AuthRouter = Router();

AuthRouter.post("/signin", Signin);
AuthRouter.post("/signup", Signup);
AuthRouter.put(
  "/change_password",
  [checkToken, isValidPassword],
  ChangePassword
);

export default AuthRouter;
