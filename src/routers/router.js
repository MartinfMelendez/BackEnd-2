import { Router } from "express";

import eventsRouter from "./events.router/events.router.js";
import sessionsRouter from "./sessions.router/sessions.router.js";
import health from "./health.router.js";


const router = Router();


router.use("/events", eventsRouter)
router.use('/health', health)

export default router