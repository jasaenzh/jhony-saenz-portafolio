import { Request, Response } from "express";
import { CreateSkillType, IdSkillParamsType } from "../schemas/skill.schema";
import { uploadFileCloudinary } from "../services/uploadFileCloudinary.services";
import { findAllSkills, findByIdAndDeleteSkill, findByIdAndUpdateSkill, findByIdSkill, insertSkill, } from "../services/skill.services";

const postSkill = async (req: Request<unknown, unknown, CreateSkillType>, res: Response) => {
  try {
    let bodySkill = req.body;
    const pathCloudinary = req.file?.path;
    const urlCloudinary = await uploadFileCloudinary(`${pathCloudinary}`);
    if (urlCloudinary) {
      bodySkill = { ...bodySkill, image: urlCloudinary };
    }
    const saveSkill = await insertSkill(bodySkill);
    const { userId } = req.body;
    saveSkill.addUser(userId)
    res.status(200).json(saveSkill);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await findAllSkills();
    res.status(200).json(skills);
  } catch (error) {
    res
      .status(500)
      .json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const getSkill = async (req: Request<IdSkillParamsType>, res: Response) => {
  try {
    const { id } = req.params;
    const findSkill = await findByIdSkill({ id });
    res.status(200).json(findSkill);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const updateSkill = async (req: Request<IdSkillParamsType, unknown, CreateSkillType>, res: Response) => {
  try {
    const { id } = req.params;
    const bodySkill = req.body;
    const skill = await findByIdAndUpdateSkill({ id }, bodySkill);
    res.status(typeof skill === "string" ? 404 : 200).json(typeof skill === "string" ? { message: skill } : skill);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

const deleteSkill = async (req: Request<IdSkillParamsType>, res: Response) => {
  try {
    const { id } = req.params;
    const skill = await findByIdAndDeleteSkill({ id });
    res.status(typeof skill === "string" ? 404 : 200).json(typeof skill === "string" ? { message: skill } : skill);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
};

export { postSkill, getSkills, getSkill, updateSkill, deleteSkill };
