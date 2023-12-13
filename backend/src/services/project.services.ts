import { Request } from "express"
import { ProjectInterface } from "../interfaces/project.interface"
import Project from "../models/project.model"
import { CreateProjectType, IdProjectParamsType, UpdateProjectBodyType } from "../schemas/project.schema"
import { uploadFilesCloudinary } from "./uploadFileCloudinary.services"

const insertProject = async (bodyProject: CreateProjectType, req: Request): Promise<ProjectInterface> => {

  const { projectName, description, images, urlBackend, urlFrontend } = bodyProject

  const pathsCloudinary = await uploadFilesCloudinary(req)

  const newProject = await Project.create({
    projectName,
    description,
    images: pathsCloudinary,
    urlBackend,
    urlFrontend,
  })

  return newProject

}

const findAllProjects = async (): Promise<ProjectInterface[]> => {
  const projects = await Project.findAll()
  return projects
}

const findProjectById = async ({ id }: IdProjectParamsType): Promise<ProjectInterface | string> => {
  const project = await Project.findOne({ where: { id: id } });
  if (!project) {
    return "No se encuentra el ID del proyecto";
  }
  return project;
}

const findProjectByIdAndUpdate = async ({ id }: IdProjectParamsType, bodyProject: UpdateProjectBodyType) => {
  const project = await Project.findOne({ where: { id: id } });
  if (!project) {
    return "No se encuentra el ID del proyecto";
  }
  const updateProject = await Project.update(bodyProject, { where: { id: id } });

  if (!updateProject) {
    return "No se pudo actualizar el proyecto";
  }
  const projectUpdated = await Project.findOne({ where: { id: id } });
  if (!projectUpdated) {
    return "Error al cargar el id actualizado";
  }
  return projectUpdated
}

const findProjectByIdAndDelete = async ({ id }: IdProjectParamsType) => {
  const project = await Project.findOne({ where: { id: id } });
  if (!project) {
    return "No se encuentra el ID del proyecto";
  }
  const deleteProject = await Project.destroy({ where: { id: id } });
  if (!deleteProject) {
    return "No se pudo eliminar el proyecto";
  }
  return "Se ha elimidado el Proyecto de forma correcta";
}

export { insertProject, findAllProjects, findProjectById, findProjectByIdAndUpdate, findProjectByIdAndDelete }