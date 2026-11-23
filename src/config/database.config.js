import mongoose, { mongo } from "mongoose";
import env from './config.js'

export const conectDB = async () => {
    try {
        await mongoose.connect(env.MONGO_URL)
        console.log("Conexion a la base de datos ok")
    } catch (error) {
        console.error("No se pudo conectar a MongoDB: ", error.message)
    }
}