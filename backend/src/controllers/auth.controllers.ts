import { Request, Response } from "express";
import { AuthType } from "../schemas/auth.schema";

const register = (req: Request<unknown, unknown, AuthType>, res: Response) => {
  try {
    res.send("Login");
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

export { register };
