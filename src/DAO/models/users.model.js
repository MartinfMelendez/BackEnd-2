import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user", "organizer"],
        default: "user"
    }
});

export default mongoose.model("User", userSchema)