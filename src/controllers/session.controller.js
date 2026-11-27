import sessionService from "../services/session.service.js"
class SessionController {
    async getAll(req, res, next) {
        try {
            const users = await sessionService.getAll()
            res.status(200).json({ "status": "getAllSession", "payload": users })
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const data = req.body
            const newUser = await sessionService.create(data)
            res.status(201).json({ "status": "create", "playload": newUser })
        } catch (error) {
            next(error)
        }
    }
}

const sessionController = new SessionController();

export default sessionController;