import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String // Todo: change the image schema later
    },
    googleAccessToken: {
        type: String
    },
    googleRefreshToken: {
        type: String
    },
    googleId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


export const User = mongoose.model("User", userSchema);