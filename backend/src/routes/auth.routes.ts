import { Router } from "express";
import { login, register, verifyUserController } from "../controllers/auth.controllers";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { CreateAuthSchema, LoginAuthSchema } from "../schemas/auth.schema";
import { upload } from "../middlewares/multer.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";

const authRouter = Router();

// Registrarse
authRouter.post("/register", upload.single("image"), schemaValidation(CreateAuthSchema), register);

// Iniciar sesion
authRouter.post("/login", schemaValidation(LoginAuthSchema), login);

// Validar Token
authRouter.get("/verifyUser", validateToken, verifyUserController)

export { authRouter };
