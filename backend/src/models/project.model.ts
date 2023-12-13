import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";
import { ProjectInterface } from "../interfaces/project.interface";


interface ProjectModel extends Model, Omit<ProjectInterface, "id"> { }

const Project = sequelize.define<ProjectModel>('Project',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    urlBackend: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlFrontend: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
)


export default Project