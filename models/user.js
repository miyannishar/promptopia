import { Schema, model, models } from "mongoose";

const userSchema = new mongoose.Schema({
    name: String, 
    size: String 
});
const userModel = mongoose.model("User", userSchema);
