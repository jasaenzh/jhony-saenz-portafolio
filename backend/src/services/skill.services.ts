import { SkillInterface } from "../interfaces/skill.interface";
import Skill from "../models/skill.model";
import { CreateSkillType, IdSkillParamsType, UpdateSkillBodyType } from "../schemas/skill.schema";

const insertSkill = async (bodySkill: CreateSkillType): Promise<SkillInterface> => {
  const { nameSkill, description, image } = bodySkill;

  const newSkill = await Skill.create({
    nameSkill,
    description,
    image,
  });

  return newSkill;
};

const findAllSkills = async (): Promise<SkillInterface[]> => {
  const skills = await Skill.findAll();
  return skills;
};

const findByIdSkill = async ({ id, }: IdSkillParamsType): Promise<SkillInterface | string> => {
  const findSkill = await Skill.findOne({ where: { id: id } });

  if (!findSkill) {
    return "No se encuentra el ID del Skill";
  }

  return findSkill;
};

const findByIdAndUpdateSkill = async ({ id }: IdSkillParamsType, bodySkill: UpdateSkillBodyType): Promise<SkillInterface | string> => {
  const findSkill = await Skill.findOne({ where: { id: id } });

  if (!findSkill) {
    return "No se encuentra el ID del Skill";
  }

  const updateSkill = await Skill.update(bodySkill, { where: { id: id } });

  if (!updateSkill) {
    return "No se pudo actualizar el Skill";
  }

  const skillUpdated = await Skill.findOne({ where: { id: id } });

  if (!skillUpdated) {
    return "Error al cargar el id actualizado";
  }

  return skillUpdated;
};

const findByIdAndDeleteSkill = async ({
  id,
}: IdSkillParamsType): Promise<string> => {
  // Buscar el skill antes de eliminarlo
  const skillToDelete = await Skill.findOne({ where: { id: id } });

  if (!skillToDelete) {
    return "No se encuentra el ID";
  }

  const removeSkill = await Skill.destroy({ where: { id: id } });

  if (!removeSkill) {
    return "No se pudo eliminar el registro";
  }

  return "Se ha elimidado el Skill de forma correcta";
};

export { insertSkill, findAllSkills, findByIdSkill, findByIdAndUpdateSkill, findByIdAndDeleteSkill, };
