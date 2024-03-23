import { Router } from "express";
import { Signin, Signup } from "../controllers/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post("/signin", Signin);
AuthRouter.post("/signup", Signup);

export default AuthRouter;
