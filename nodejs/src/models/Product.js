import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // price value can not be less the 0, min:- minimum
  },
  createdAt: {
    type: Date,
    // default value
    default: Date.now(),
  },
  rating: {
    type: Number,
    default: 5,
    min: 0, // minimum value of rating can be only upto 0
    max: 5, // maximum value of rating can be only upto 5
  },
  description: String,
  imageUrls: {
    type: [String], // array of string type
  }
});

const model = mongoose.model("Product", productSchema);

export default model;
