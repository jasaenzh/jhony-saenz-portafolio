import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";
import { ExperienceInterface } from "../interfaces/experience.interface";

interface ExperienceModel extends Model, Omit<ExperienceInterface, "id"> { }


const Experience = sequelize.define<ExperienceModel>('Experience',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currently: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    }
  },
  {
    timestamps: false,
  }
)


export default Experience;