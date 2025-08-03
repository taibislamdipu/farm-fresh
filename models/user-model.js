import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // common for all
  profilePicture: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ["user", "farmer"],
    default: "user",
    required: false,
  },
  // only for farmer
  farmName: {
    type: String,
    required: false,
  },
  specialization: {
    type: [String],
    required: false,
  },
  farmSize: {
    type: String,
    required: false,
  },
});
