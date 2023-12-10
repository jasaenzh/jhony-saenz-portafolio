import { Request, Response } from "express";
import { AuthType } from "../schemas/auth.schema";
import { registerServiceNewUser } from "../services/auth.services";

const register = async (
  req: Request<unknown, unknown, AuthType>,
  res: Response
) => {
  try {
    let body = req.body;
    const registerNewUser = registerServiceNewUser(body);
    res.status(200).json(registerNewUser);
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

export { register };
