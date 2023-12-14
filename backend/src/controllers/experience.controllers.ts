import { Request, Response } from "express";
import { CreateExperienceType, IdExperienceParamsType, UpdateExperienceBodyType } from "../schemas/experience.schema";
import { deleteExperienceById, findAllExperiences, findExperienceById, insertExperience, updateExperienceById } from "../services/experience.services";

const postExperience = async (req: Request<unknown, unknown, CreateExperienceType>, res: Response) => {
  try {

    let bodyExperience = req.body

    const saveExperience = await insertExperience(bodyExperience)
    saveExperience.setUser(bodyExperience.userId)

    res.status(200).json(saveExperience)

  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}

const getExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await findAllExperiences();
    res.status(200).json(experiences)
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}

const getExperience = async (req: Request<IdExperienceParamsType>, res: Response) => {
  try {
    const { id } = req.params;
    const experience = await findExperienceById({ id });
    res.status(200).json(experience);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}


const updateExperience = async (req: Request<IdExperienceParamsType, unknown, UpdateExperienceBodyType>, res: Response) => {
  try {
    const { id } = req.params;
    const bodyExperience = req.body;
    const experience = await updateExperienceById({ id }, bodyExperience);
    res.status(typeof experience === "string" ? 404 : 200).json(typeof experience === "string" ? { message: experience } : experience);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}


const deleteExperience = async (req: Request<IdExperienceParamsType>, res: Response) => {
  try {
    const { id } = req.params;
    const experience = await deleteExperienceById({ id });
    res.status(typeof experience === "string" ? 404 : 200).json(typeof experience === "string" ? { message: experience } : experience);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}

export { postExperience, getExperiences, getExperience, updateExperience, deleteExperience }

