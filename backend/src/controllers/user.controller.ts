import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    res.send("Estoy en getUsers");
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    res.send("Estoy en getUser");
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

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

const delegteUserById = async (req: Request, res: Response) => {
  try {
    res.send("Estoy en deleteUser");
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

export { updateUserById, getUsers, getUserById, delegteUserById };
