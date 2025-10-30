import mongoose, { Schema } from "mongoose";


const noteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String // Todo: change the image schema later
    },
    description: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});


export const Note = mongoose.model("Note", noteSchema);