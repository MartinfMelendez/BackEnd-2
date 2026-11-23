import { Router } from "express";
import { getAllEvents } from "../../controllers/events.controller.js";

const eventsRouter = Router()

eventsRouter.get('/', getAllEvents)


export default eventsRouter