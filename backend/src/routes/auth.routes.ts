import { Router } from "express";
import { login, register } from "../controllers/auth.controllers";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { CreateAuthSchema, LoginAuthSchema } from "../schemas/auth.schema";
import { upload } from "../middlewares/multer.middleware";

const authRouter = Router();

authRouter.post(
  "/register",
  upload.single("image"),
  schemaValidation(CreateAuthSchema),
  register
);

authRouter.post("/login", schemaValidation(LoginAuthSchema), login);

export { authRouter };
