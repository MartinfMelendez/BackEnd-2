import EventsRepository from '../repositories/events.repository.js'
class EventsServices {
    constructor() {
        this.repository = new EventsRepository();
    }
    async getAll() {
        return await this.repository.getAll()
    }
}

const eventsServices = new EventsServices();

export default eventsServices;