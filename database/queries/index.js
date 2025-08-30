import { notFound } from "next/navigation";

import connectMongo from "@/dbConnect/mongo";
import productModel from "@/models/product-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import mongoose from "mongoose";

export async function getAllProducts({ page = 1, limit = 6 }) {
  await connectMongo();

  const skip = (page - 1) * limit;

  const products = await productModel
    .find()
    .sort({ _id: -1 }) // newest first
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await productModel.countDocuments();

  return {
    products: replaceMongoIdInArray(products),
    total,
  };
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
