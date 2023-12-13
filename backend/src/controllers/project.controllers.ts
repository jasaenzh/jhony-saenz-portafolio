import { Request, Response } from "express"
import { findAllProjects, findProjectById, findProjectByIdAndDelete, findProjectByIdAndUpdate, insertProject } from "../services/project.services";
import { IdProjectParamsType, UpdateProjectBodyType } from "../schemas/project.schema";

const postProject = async (req: Request, res: Response) => {
  try {
    let bodyProject = req.body
    const saveProject = await insertProject(bodyProject, req)
    saveProject.setUser(bodyProject.userId)
    res.status(200).json(saveProject);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}

const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await findAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}


const getProject = async (req: Request<IdProjectParamsType>, res: Response) => {
  try {
    const { id } = req.params;
    const project = await findProjectById({ id });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}


const putProject = async (req: Request<IdProjectParamsType, unknown, UpdateProjectBodyType>, res: Response) => {
  try {
    const { id } = req.params;
    const bodyProject = req.body;
    const project = await findProjectByIdAndUpdate({ id }, bodyProject);
    res.status(typeof project === "string" ? 404 : 200).json(typeof project === "string" ? { message: project } : project);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}


const deleteProject = async (req: Request<IdProjectParamsType>, res: Response) => {
  try {
    const { id } = req.params;
    const project = await findProjectByIdAndDelete({ id });
    res.status(typeof project === "string" ? 404 : 200).json(typeof project === "string" ? { message: project } : project);
  } catch (error) {
    res.status(500).json([{ code: "Controller Server", message: "Error en el servidor" }]);
  }
}


export { postProject, getProjects, getProject, putProject, deleteProject }