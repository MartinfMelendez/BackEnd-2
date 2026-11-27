
import eventsServices from "../services/events.service.js";

class EventsController {
    async getAllEvents(req, res, next) {
        try {
            const events = await eventsServices.getAll();
            res.status(200).json({ "status": "Success", "payload": events });
        } catch (error) {
            next(error);
        }
    }
}

export default new EventsController();