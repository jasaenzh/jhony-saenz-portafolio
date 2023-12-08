import { ZodError } from "zod";
import { Request, Response } from "express";
import { loginShcema } from "../schemas/auth.schema";

const register = (req: Request, res: Response) => {
  try {
    const result = loginShcema.parse(req.body);
    console.log(result);
    res.send("Login");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map((issue) => ({
          code: issue.code,
          path: issue.path,
          message: issue.message,
        })),
      );
    }
    res
      .status(500)
      .json([{ code: "Server", message: "Error en el servidor" || error }]);
  }
};

export { register };
