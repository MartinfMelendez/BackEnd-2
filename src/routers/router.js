import { Router } from "express";
import userRouter from "./user.router/user.router.js";
import eventsRouter from "./events.router/events.router.js";


const router = Router();

router.use("/users", userRouter)
router.use("/events", eventsRouter)

export default router