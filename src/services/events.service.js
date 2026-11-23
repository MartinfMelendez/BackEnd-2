import EventsRepository from "../repository/events.repository.js";

async function getAll() {
    const eventsRepository = new EventsRepository();
    return await eventsRepository.getAll();
}

export { getAll }