import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";
import { UserInterface, UserRole } from "../interfaces/user.interface";
import Skill from "./skill.model";

interface UserModel extends Model, Omit<UserInterface, "id"> {
  addSkills(skills: any): unknown;
}

const User = sequelize.define<UserModel>(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondLastName: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    aboutMe: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(UserRole)),
      allowNull: false,
      defaultValue: UserRole.USER,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.belongsToMany(Skill, { through: "UserSkill" });
Skill.belongsToMany(User, { through: "UserSkill" });

export default User;
