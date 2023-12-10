import { APP } from "./app";
import { sequelize } from "./config/db.config";
import { syncModel } from "./utils/sync.model.utils";

const PORT: number = parseInt(process.env.PORT_SERVER || "4000");

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexion exitosa con la base de datos");
    syncModel();
    APP.listen(PORT, () =>
      console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO: ${PORT}`)
    );
  })
  .catch((error: any) => {
    console.error("No se pudo conectar a la base de datos:", error);
  });
