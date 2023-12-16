import { Router } from "express";
import { authRouter } from "./auth.routes";
import { userRouter } from "./user.routes";
import { skillRouter } from "./skill.routes";
import { projectRouter } from "./project.routes";
import { experienceRouter } from "./experience.routes";

const ROUTER = Router();

ROUTER.use("/auth", authRouter);
ROUTER.use("/users", userRouter);
ROUTER.use("/skills", skillRouter);
ROUTER.use("/projects", projectRouter)
ROUTER.use("/experiences", experienceRouter)

export { ROUTER };
