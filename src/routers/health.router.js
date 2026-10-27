import { Router } from "express";

const health = Router();

health.get("/", (req, res) => {
    try {
        res.send({ "status": "ok", "message": "Servidor activo" })

    } catch (error) {
        console.log(error.message)
    }
})


export default health