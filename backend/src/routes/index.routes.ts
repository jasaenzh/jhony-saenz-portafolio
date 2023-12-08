import { Router } from "express";
import { authRouter } from "./auth.routes";

const ROUTER = Router();

ROUTER.use("/auth", authRouter);

export { ROUTER };
