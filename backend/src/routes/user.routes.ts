import { Router } from "express";
import { getUsers, updateUserById } from "../controllers/user.controller";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { UpdateUserSchema } from "../schemas/user.schemas";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id");
userRouter.put("/:id", schemaValidation(UpdateUserSchema), updateUserById);
userRouter.delete("/:id");

export { userRouter };
