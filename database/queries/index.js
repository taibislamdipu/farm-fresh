import productModel from "@/models/product-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export async function getAllProducts() {
  const products = await productModel.find().lean();
  return replaceMongoIdInArray(products);
}

export async function getProductById(id) {
  const product = await productModel.findById(id).lean();
  return replaceMongoIdInObject(product);
}
