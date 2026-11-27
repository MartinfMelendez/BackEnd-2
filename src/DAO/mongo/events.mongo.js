import ManagerMongo from "./manager.mongo.js";
import Events from '../models/events.model.js'

class EventsMongo extends ManagerMongo {
    constructor() {
        super(Events);
    }

}
export default EventsMongo