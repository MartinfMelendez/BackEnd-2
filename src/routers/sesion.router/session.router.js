import { Router } from "express";

const sessionRouter = Router();

sessionRouter.get('/', (req, res) => {
    res.send("Estos en la pagina de usuarios")
})


export default sessionRouter