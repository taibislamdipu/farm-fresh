import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  pricePerUnit: {
    type: Number,
    required: false,
  },
  unit: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  farmLocation: {
    type: String,
    required: false,
  },
  harvestFrom: {
    type: String,
    required: false,
  },
  harvestDate: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: false,
  },
  images: {
    type: [String],
    required: false,
  },
  productFeatures: {
    type: [String],
    required: false,
  },
  label: {
    type: String,
    default: null,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const productModel =
  mongoose.models.products || mongoose.model("products", productSchema);

export default productModel;
