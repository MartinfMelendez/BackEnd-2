import { getAll } from "../services/events.service.js"

async function getAllEvents(req, res, next) {

    try {
        const events = await getAll();

        res.status(200).json({ "status": "success", "payload": events });
    }
    catch (error) { next(error) }

}


export { getAllEvents }