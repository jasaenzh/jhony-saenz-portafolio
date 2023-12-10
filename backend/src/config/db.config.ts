import { Sequelize } from "sequelize";

// Variables par ala conexion
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// Valido si falta algun dato
if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !DB_NAME) {
  throw new Error(
    "Faltan variables de entorno para la conexión a la base de datos."
  );
}

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    dialect: "postgres",
  }
);

sequelize.query("SET TIMEZONE TO 'America/Bogota';");

export { sequelize };
