import { Request, Response } from "express";
import {
  findAllUsers,
  findUserAndDeleteByIdController,
  findUserAndUpdateByIdController,
  findUserByIdController,
} from "../services/user.services";
import { BodyUserType, ParamsUserType } from "../schemas/user.schemas";

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

const getUserById = async (req: Request<ParamsUserType>, res: Response) => {
  try {
    const { id } = req.params;
    const user = await findUserByIdController({ id });
    res
      .status(typeof user === "string" ? 404 : 200)
      .json(typeof user === "string" ? { message: user } : user);
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const updateUserById = async (
  req: Request<ParamsUserType, unknown, BodyUserType>,
  res: Response
) => {
  try {
    const bodyUser = req.body;
    const { id } = req.params;
    const user = await findUserAndUpdateByIdController({ id }, bodyUser);
    res
      .status(typeof user === "string" ? 404 : 200)
      .json(typeof user === "string" ? { message: user } : user);
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const delegteUserById = async (req: Request<ParamsUserType>, res: Response) => {
  try {
    const { id } = req.params;
    const userDelete = await findUserAndDeleteByIdController({ id });
    res.status(200).json({ message: userDelete });
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

export { updateUserById, getUsers, getUserById, delegteUserById };
