import { Router } from "express";
import EventsController from "../../controllers/events.controller.js";

const eventsRouter = Router()

eventsRouter.get('/', EventsController.getAllEvents)


export default eventsRouter