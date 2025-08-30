import { notFound } from "next/navigation";

import connectMongo from "@/dbConnect/mongo";
import productModel from "@/models/product-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import mongoose from "mongoose";

export async function getAllProducts() {
  await connectMongo();
  const products = await productModel.find().sort({ _id: -1 }).lean();
  return replaceMongoIdInArray(products);
}

export async function getProductsByCategory(category) {
  await connectMongo();
  const products = await productModel.find({ category }).lean();
  return replaceMongoIdInArray(products);
}

export async function getProductById(id) {
  await connectMongo();

  // Validate the id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return notFound();
  }

  const product = await productModel.findById(id).lean();

  if (!product) {
    return notFound();
  }

  return replaceMongoIdInObject(product);
}

export async function getAllProductsByFarmerId(farmerId) {
  await connectMongo();
  const products = await productModel.find({ farmerId }).lean();
  return replaceMongoIdInArray(products);
}
