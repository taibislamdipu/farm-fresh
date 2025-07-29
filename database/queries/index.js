import connectMongo from "@/dbConnect/mongo";
import productModel from "@/models/product-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export async function getAllProducts() {
  await connectMongo();
  const products = await productModel.find().lean();
  return replaceMongoIdInArray(products);
}

export async function getProductById(id) {
  await connectMongo();
  const product = await productModel.findById(id).lean();
  return replaceMongoIdInObject(product);
}
