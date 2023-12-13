import { Router } from "express";
import { deleteProject, getProject, getProjects, postProject, putProject } from "../controllers/project.controllers";
import { upload } from "../middlewares/multer.middleware";
import { schemaValidation } from "../middlewares/schemaValidation.middleware";
import { CreateProjectSchema, UpdateAndDeleteProjectSchema } from "../schemas/project.schema";

const projectRouter = Router();

projectRouter.post("/", upload.array('images'), schemaValidation(CreateProjectSchema), postProject);
projectRouter.get("/", getProjects);
projectRouter.get("/:id", schemaValidation(UpdateAndDeleteProjectSchema), getProject);
projectRouter.put("/:id", schemaValidation(UpdateAndDeleteProjectSchema), putProject);
projectRouter.delete("/:id", schemaValidation(UpdateAndDeleteProjectSchema), deleteProject);

export { projectRouter };