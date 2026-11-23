import mongoose from "mongoose";
import { Events } from "../models/events.model.js";

class EventsMongo {
    async getAll() {
        return await Events.find().lean();
    }

}


export default EventsMongo