import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true  
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    assistantName: {
        type:String,
        default: "Jarvis"
    },
    assistantImage: {
        type:String,
        default: "https://res.cloudinary.com/dz1qj3x8h/image/upload/v1735681234/assistant.png"
    },
    history: [
        {
            type: String
        }
    ]
},{timestamps: true})

const User = mongoose.model("User", userSchema);
export default User;