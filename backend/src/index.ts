import { APP } from "./app";

const PORT_SERVER: number = parseInt(process.env.PORT_SERVER || "");
const PORT_SECUNDARY: number = 4000;

const PORT: number = PORT_SERVER || PORT_SECUNDARY;

APP.listen(PORT, () =>
  console.log(`SERVIDOR ESCUCHANDO EN EL PUERTO: ${PORT}`),
);
