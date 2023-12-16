import { UserInterface } from "../interfaces/user.interface";
import Experience from "../models/experience.model";
import Project from "../models/project.model";
import Skill from "../models/skill.model";
import User from "../models/user.model";
import { BodyUserType, ParamsUserType } from "../schemas/user.schemas";

const findAllUsers = async (): Promise<UserInterface[]> => {
  const users = await User.findAll({
    attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    include: [
      {
        model: Project,
        attributes: {
          exclude: ["id", "userId", "createdAt", "updatedAt"]
        }
      },
      {
        model: Experience,
        attributes: {
          exclude: ["id", "userId"]
        },
      },
      {
        model: Skill,
        attributes: {
          exclude: ["id"]
        },
        through: { attributes: [] } // quita todos los atributos de la relacion
      }
    ]
  });
  return users;
};


const findUserByIdController = async ({
  id,
}: ParamsUserType): Promise<UserInterface | string> => {
  const user = await User.findOne({ where: { id: id } });
  if (!user) {
    return "Id no encontrado";
  }
  return user;
};

const findUserAndUpdateByIdController = async (
  { id }: ParamsUserType,
  bodyUser: BodyUserType
): Promise<UserInterface | string> => {
  const findUser = await User.findOne({ where: { id: id } });
  if (!findUser) {
    return "Id no encontrado";
  }
  const updateUser = await User.update(bodyUser, { where: { id: id } });
  if (!updateUser) {
    return "No se pudo actualizar";
  }
  const userUpdated = await User.findOne({ where: { id: id } });
  if (!userUpdated) {
    return "No se encuentra el ID";
  }
  return userUpdated;
};

const findUserAndDeleteByIdController = async ({
  id,
}: ParamsUserType): Promise<string> => {
  const findUser = await User.findOne({ where: { id: id } });
  if (!findUser) {
    return "Id no encontrado";
  }
  const removeUser = await User.destroy({ where: { id: id } });
  if (!removeUser) {
    return "No se pudo eliminar el registro";
  }
  return "Usuario eliminado correctamente!";
};

export {
  findAllUsers,
  findUserByIdController,
  findUserAndUpdateByIdController,
  findUserAndDeleteByIdController,
};
