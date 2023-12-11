import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { FindUserById, UpdateUserSchema } from "../schemas/user.schemas";
import {
  delegteUserById,
  getUserById,
  getUsers,
  updateUserById,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", schemaValidation(FindUserById), getUserById);
userRouter.put("/:id", schemaValidation(UpdateUserSchema), updateUserById);
userRouter.delete("/:id", schemaValidation(FindUserById), delegteUserById);

export { userRouter };
