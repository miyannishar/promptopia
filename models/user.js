import { Schema, model, models, mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, " EMail is required"],
  },
  username: {
    type: String,
    required: [true, " Username is required"],
  },
  image: {
    type: String,
  },
});
const User = models.User || mongoose.model("User", userSchema);

export default User;
