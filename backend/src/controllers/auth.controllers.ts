import { Request, Response } from "express";

const register = (req: Request, res: Response) => {
  try {
    res.send("Login");
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

export { register };
