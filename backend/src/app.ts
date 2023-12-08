import "dotenv/config";
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { ROUTER } from "./routes/index.routes";

const APP: Express = express();

const NODE_ENV = process.env.NODE_ENV;

NODE_ENV === "development" && APP.use(morgan("dev"));

// Middlewares
APP.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

APP.use(express.json());

// Ruta principal
APP.use("/api", ROUTER);

export { APP };
