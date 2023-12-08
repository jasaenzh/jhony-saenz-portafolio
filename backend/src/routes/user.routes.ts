import { Router } from "express";
import { updateUserById } from "../controllers/user.controller";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { updateSchema } from "../schemas/auth.schema";

const userRouter = Router();

userRouter.put("/:id", schemaValidation(updateSchema), updateUserById);

export { userRouter };
