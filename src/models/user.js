import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    require: [true, "Email is required !!"],
  },
  password: {
    type: String,
    require: [true, "Password is required !!"],
  },
  about: String,
  profileUrl: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
