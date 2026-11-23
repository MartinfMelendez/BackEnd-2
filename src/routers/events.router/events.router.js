import { Router } from "express";
import { getAllEvents, getEventById } from "../../controllers/events.controller.js";

const eventsRouter = Router()

eventsRouter.get('/', getAllEvents)
eventsRouter.get('/:id', getEventById)

export default eventsRouter