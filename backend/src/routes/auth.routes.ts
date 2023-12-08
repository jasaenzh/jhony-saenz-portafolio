import { Router } from "express";
import { register } from "../controllers/auth.controllers";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { registerShcema } from "../schemas/auth.schema";

const authRouter = Router();

authRouter.post("/register", schemaValidation(registerShcema), register);

export { authRouter };
