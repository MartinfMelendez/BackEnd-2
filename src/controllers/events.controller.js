import { getAll } from "../services/events.service.js"

async function getAllEvents(req, res, next) {

    try {
        const events = await getAll();

        res.status(200).json({ "status": "success", "payload": events });
    }
    catch (error) { next(error) }

}


async function getEventById(req, res, next) {
    const { id } = req.params;

    try {
        const event = await getById(id);
        res.status(200).json({ "status": "success", "payload": event });
    } catch (error) {
        next(error);
    }
}

export { getAllEvents, getEventById }