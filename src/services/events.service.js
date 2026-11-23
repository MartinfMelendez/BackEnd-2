import EventsRepository from "../repository/events.repository.js";

async function getAll() {
    const eventsRepository = new EventsRepository();
    return await eventsRepository.getAll();
}

async function getById(id) {
    const eventsRepository = new EventsRepository();
    return await eventsRepository.getById(id);
}

export { getAll, getById }