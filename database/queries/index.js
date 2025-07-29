import productModel from "@/models/product-model";
import { replaceMongoIdInArray } from "@/utils/data-util";

export async function getAllProducts() {
  const products = await productModel.find().lean();
  return replaceMongoIdInArray(products);
}
