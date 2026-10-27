import { Router } from "express";

const eventsRouter = Router();

eventsRouter.get('/', (req, res) => {
    res.status(200).json({ "status": "success", "payload": [] })
})


export default eventsRouter