import EventsMongos from "../DAO/mongo/events.mongo.js";

const eventsRepository = new EventsMongos();

export default class EventsRepository {
    async getAll() {
        return await eventsRepository.getAll();
    }
}