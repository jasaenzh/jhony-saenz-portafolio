import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";
import { SkillInterface } from "../interfaces/skill.interface";

interface SkillModel extends Model, Omit<SkillInterface, "id"> {}

const Skill = sequelize.define<SkillModel>(
  "Skill",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nameSkill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Skill;
