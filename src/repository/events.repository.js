import EventsMongos from "../DAO/mongo/events.mongo.js";

const eventsRepository = new EventsMongos();

export default class EventsRepository {
    async getAll() {
        return await eventsRepository.getAll();
    }
    async getById(id) {
        if (!id) {
            throw new Error("ID inválido");
        }
        return await eventsRepository.getById(id);
    }
}