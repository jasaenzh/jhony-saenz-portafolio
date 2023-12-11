import { Request, Response } from "express";
import { AuthType, LoginType } from "../schemas/auth.schema";
import {
  loginServiceUser,
  registerServiceNewUser,
} from "../services/auth.services";
import { uploadFileCloudinary } from "../services/uploadFileCloudinary.services";

const register = async (
  req: Request<unknown, unknown, AuthType>,
  res: Response
) => {
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

const login = async (
  req: Request<unknown, unknown, LoginType>,
  res: Response
) => {
  try {
    const body = req.body;
    const loginUser = await loginServiceUser(body);
    res.status(200).json(loginUser);
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

export { register, login };
