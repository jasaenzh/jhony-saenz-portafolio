import { Router } from "express";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { CreateExperienceSchema, UpdateAndDeleteExperienceSchema } from "../schemas/experience.schema";
import { deleteExperience, getExperience, getExperiences, postExperience, updateExperience } from "../controllers/experience.controllers";

const experienceRouter = Router();

experienceRouter.post("/", schemaValidation(CreateExperienceSchema), postExperience);
experienceRouter.get("/", getExperiences);
experienceRouter.get("/:id", schemaValidation(UpdateAndDeleteExperienceSchema), getExperience);
experienceRouter.put("/:id", schemaValidation(UpdateAndDeleteExperienceSchema), updateExperience);
experienceRouter.delete("/:id", schemaValidation(UpdateAndDeleteExperienceSchema), deleteExperience);


export { experienceRouter }