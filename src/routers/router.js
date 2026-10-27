import { Router } from "express";
import sessionRouter from "./sesion.router/session.router.js";
import eventsRouter from "./events.router/events.router.js";
import health from "./health.router.js";


const router = Router();

router.use("/sessions", sessionRouter)
router.use("/events", eventsRouter)
router.use('/health', health)

export default router