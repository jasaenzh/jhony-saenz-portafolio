import { Router } from "express";
import { authRouter } from "./auth.routes";
import { userRouter } from "./user.routes";
import { skillRouter } from "./skill.routes";

const ROUTER = Router();

ROUTER.use("/auth", authRouter);
ROUTER.use("/users", userRouter);
ROUTER.use("/skills", skillRouter);

export { ROUTER };
