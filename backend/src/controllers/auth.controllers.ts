import { Request, Response } from "express";
import { AuthType, LoginType } from "../schemas/auth.schema";
import {
  loginServiceUser,
  registerServiceNewUser,
} from "../services/auth.services";
import { uploadFileCloudinary } from "../services/uploadFileCloudinary.services";
import { RequestExtends } from "../interfaces/reqExtends.interface";
import User from "../models/user.model";

const register = async (req: Request<unknown, unknown, AuthType>, res: Response) => {
  try {
    let body = req.body;
    const { SkillId } = req.body;
    const pathCloudinary = req.file ? req.file?.path : undefined;
    const urlCloudinary = await uploadFileCloudinary(`${pathCloudinary}`);
    if (urlCloudinary) {
      body = { ...body, image: urlCloudinary };
    }
    const registerNewUser = await registerServiceNewUser(body);
    if (SkillId && SkillId.length > 0) await registerNewUser.addSkills(SkillId);
    res.status(200).json(registerNewUser);
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const login = async (req: Request<unknown, unknown, LoginType>, res: Response) => {
  try {
    const body = req.body;
    const loginUser = await loginServiceUser(body);
    res.status(200).json(loginUser);
  } catch (error) {
    if (error instanceof Error && error.message === "Datos incorrectos!") {
      // Puedes manejar específicamente el caso de datos incorrectos
      return res.status(401).json({ message: "Datos incorrectos" });
    }
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const verifyUserController = async (req: RequestExtends, res: Response) => {

  const token = req.user?.token

  if (typeof req.user === 'string') {
    res.status(401).json({ msg: "Token de usuario no válido" });
    return;
  }

  const id = req.user?.id

  try {
    const findUser = await User.findOne({ where: { id } })
    if (!findUser) {
      res.status(404).json({ msg: "Usuario no encontrado" });
    }
    res.cookie('token', token, {
      domain: 'c14-53-t-node-react.vercel.app',
      path: '/'
    })

    res.status(200).json({
      token,
      id,
      email: findUser?.email,
      name: findUser?.firstName,
    })

  } catch (error) {
    res.status(500).json(error)
  }
}


export { register, login, verifyUserController };
