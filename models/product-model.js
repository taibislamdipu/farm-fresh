import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    enum: ["Organic", "New", "Sale", "Featured"], // you can extend this list
    default: null,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
