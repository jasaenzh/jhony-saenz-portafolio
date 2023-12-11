import { Router } from "express";
import {
  deleteSkill,
  getSkill,
  getSkills,
  postSkill,
  updateSkill,
} from "../controllers/skill.controllers";
import { upload } from "../middlewares/multer.middleware";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import {
  CreateSkillSchema,
  UpdateAndDeleteSkillSchema,
} from "../schemas/skill.schema";

const skillRouter = Router();

skillRouter.post(
  "/",
  upload.single("image"),
  schemaValidation(CreateSkillSchema),
  postSkill
);
skillRouter.get("/", getSkills);
skillRouter.get("/:id", schemaValidation(UpdateAndDeleteSkillSchema), getSkill);
skillRouter.put(
  "/:id",
  schemaValidation(UpdateAndDeleteSkillSchema),
  updateSkill
);
skillRouter.delete(
  "/:id",
  schemaValidation(UpdateAndDeleteSkillSchema),
  deleteSkill
);

export { skillRouter };
