import { Router } from "express";
import { register } from "../controllers/auth.controllers";

const authRouter = Router();

authRouter.post("/register", register);

export { authRouter };
