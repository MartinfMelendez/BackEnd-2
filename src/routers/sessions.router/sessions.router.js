import { Router } from "express";
import sessionController from "../../controllers/session.controller.js";

const sessionsRouter = Router();

sessionsRouter.get('/', sessionController.getAll)
sessionsRouter.post('/register', sessionController.create)

export default sessionsRouter;