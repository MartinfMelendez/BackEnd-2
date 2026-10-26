import { config } from "dotenv";
config();
const variablesRequeridas = ["PORT"]

for (let variable of variablesRequeridas) {
    if (!process.env[variable]) {
        throw new Error(`La variable de entorno ${variable} es requerida`)
    }
}


export default {
    PORT: process.env.PORT
}
