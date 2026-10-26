import { Router } from "express";

const eventsRouter = Router();

eventsRouter.get('/', (req, res) => {
    res.send("Estos en la pagina de eventos")
})


export default eventsRouter