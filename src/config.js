import { config } from "dotenv";//importar variavles de entorno (instalar modulo npm i dotenv)

config();//varables de entorno


export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";

export const PORT = process.env.PORT || 3000;