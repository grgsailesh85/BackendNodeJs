import mongoose from "mongoose";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex.js";

const userSchema = new mongoose.Schema({
  address: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "Nepal",
    },
    province: String,
    street: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // does not let the user to create two user with same one email
    lowercase: true, // convert into lower-case
    trim: true, // remove extra spaces
    validate: {
      validator: (value) => {
        return EMAIL_REGEX.test(value);
      },
      message: "Invalid email address", // if return value is false then display this message
    },
  },
  phone: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8, //password should be at least of 8 length
    validate: {
      validator: (value) => {
        return PASSWORD_REGEX.test(value);
      },
      message:
        "Password must contain uppercase, lowercase, number and special character", // if return value is false then display this message
    },
  },
  profileImageUrl: String,
  roles: {
    type: [String],
    default: ["USER"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model("User", userSchema);

export default model;
