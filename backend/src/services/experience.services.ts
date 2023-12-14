import { ExperienceInterface } from "../interfaces/experience.interface";
import Experience from "../models/experience.model";
import { CreateExperienceType, IdExperienceParamsType, UpdateExperienceBodyType } from "../schemas/experience.schema"


const insertExperience = async (bodyExperience: CreateExperienceType): Promise<ExperienceInterface> => {
  const { company, currently, description, position, startDate, endDate } = bodyExperience;
  const newExperience = await Experience.create({ company, currently, description, position, startDate, endDate });
  return newExperience
}

const findAllExperiences = async (): Promise<ExperienceInterface[]> => {
  const experiences = await Experience.findAll();
  return experiences;
}

const findExperienceById = async ({ id }: IdExperienceParamsType): Promise<ExperienceInterface | string> => {

  const experience = await Experience.findOne({ where: { id: id } });

  if (!experience) {
    return "No se encuentra el ID de la experiencia";
  }

  return experience

}

const updateExperienceById = async ({ id }: IdExperienceParamsType, bodyExperience: UpdateExperienceBodyType): Promise<ExperienceInterface | string> => {
  const { company, currently, description, endDate, position, startDate } = bodyExperience
  const experienceUpdated = await Experience.findOne({ where: { id: id } });
  if (!experienceUpdated) {
    return "No se encuentra el ID de la experiencia";
  }

  const updateExperience = await Experience.update({ company, currently, description, endDate, position, startDate }, { where: { id: id } });

  if (!updateExperience) {
    return "No se pudo actualizar la experiencia";
  }

  const experience = await Experience.findOne({ where: { id: id } });

  if (!experience) {
    return "Error al cargar el id actualizado";
  }

  return experience

}

const deleteExperienceById = async ({ id }: IdExperienceParamsType): Promise<string> => {
  const experience = await Experience.findOne({ where: { id: id } });
  if (!experience) {
    return "No se encuentra el ID de la experiencia";
  }
  const deleteExperience = await Experience.destroy({ where: { id: id } });

  if (!deleteExperience) {
    return "No se pudo eliminar la experiencia";
  }
  return "Se ha elimidado la experiencia de forma correcta";

}

export { insertExperience, findAllExperiences, findExperienceById, updateExperienceById, deleteExperienceById, }