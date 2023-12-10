import { UserInterface } from "../interfaces/user.interface";
import User from "../models/user.model";

// const findAllUsers = async (): Promise<UserInterface[]> => {
//   const users = await User.findAll({
//     attributes: { exclude: ['password'] },
//     include: [
//       {
//         model: Skill,
//         attributes: { exclude: ['id'] },
//         through: { attributes: [] },
//       },
//       {
//         model: Project
//       },
//       {
//         model: Experience
//       }
//     ],
//   });
//   return users
// }

const findAllUsers = async (): Promise<UserInterface[]> => {
  const users = await User.findAll();
  return users;
};

export { findAllUsers };
