import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

export const Events = mongoose.model("Events", eventsSchema);
