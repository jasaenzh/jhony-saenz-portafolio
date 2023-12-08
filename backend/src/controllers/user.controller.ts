import { Request, Response } from "express";

const updateUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params;
    console.log(id);
    res.send("Actualuiando Usuario");
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

export { updateUserById };
