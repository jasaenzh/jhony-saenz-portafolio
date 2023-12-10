import { Request, Response } from "express";
import { findAllUsers } from "../services/user.services";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
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
