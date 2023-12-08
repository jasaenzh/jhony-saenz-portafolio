import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
        // Aca pueden ir mas validaciones (headers...etc)
      });
      next();
    } catch (error) {
      console.log(error);
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

export { schemaValidation };
