import mongoose from "mongoose";
import { Events } from "../models/events.model.js";

class EventsMongo {
    async getAll() {
        return await Events.find().lean();
    }
    getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }
        return Events.findById(id).lean();
    }
}


export default EventsMongo