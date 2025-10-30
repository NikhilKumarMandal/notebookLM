import mongoose, { Schema } from "mongoose";


const docSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    summary: {
      type: String  
    },
    studyGuide: {
        type: String
    },
    briefingDoc: {
        type: String
    },
    faq: {
        type: String
    },
    mindMap: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    noteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
        required: true
    }
}, {
    timestamps: true
});


export const Doc = mongoose.model("Doc", docSchema);