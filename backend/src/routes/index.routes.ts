import { Router } from "express";
import { authRouter } from "./auth.routes";
import { userRouter } from "./user.routes";

const ROUTER = Router();

ROUTER.use("/auth", authRouter);
ROUTER.use("/users", userRouter);

export { ROUTER };
