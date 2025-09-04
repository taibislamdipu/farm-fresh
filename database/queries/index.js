import { notFound } from "next/navigation";

import connectMongo from "@/dbConnect/mongo";
import productModel from "@/models/product-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import mongoose from "mongoose";

export async function getAllProducts({ page = 1, limit = 6, filters = {} }) {
  await connectMongo();

  const sortOptions = {
    featured: { _id: -1 },
    price_low: { pricePerUnit: 1 },
    price_high: { pricePerUnit: -1 },
    newest: { harvestDate: -1 },
    rating: { rating: -1 },
  };
  const sortQuery = sortOptions[filters.sort || "featured"];
  const skip = (page - 1) * limit;

  const query = {};

  // Search by name
  if (filters.search) {
    query.name = { $regex: filters.search, $options: "i" };
  }

  // Filter by category (support multiple, case-insensitive)
  if (filters.category) {
    const categories = filters.category.split(",");
    query.$or = categories.map((cat) => ({
      category: { $regex: `^${cat}$`, $options: "i" },
    }));
  }

  // Filter by status
  if (filters.status) {
    query.status = filters.status;
  }
  if (filters.price) {
    const [minStr, maxStr] = filters.price.split("-");
    const min = minStr ? Number(minStr) : null;
    const max = maxStr ? Number(maxStr) : null;

    if (min !== null && !isNaN(min)) {
      query.pricePerUnit = { $gte: min };
    }
    if (max !== null && !isNaN(max)) {
      query.pricePerUnit = query.pricePerUnit || {};
      query.pricePerUnit.$lte = max;
    }
  }

  const products = await productModel
    .find(query)
    .sort(sortQuery)
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await productModel.countDocuments(query);

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

export async function getCategoriesWithCounts() {
  await connectMongo();

  const categories = [
    "vegetables",
    "fruits",
    "grains",
    "dairy",
    "herbs",
    "honey",
  ];

  const results = await Promise.all(
    categories.map(async (label) => {
      const count = await productModel.countDocuments({
        category: new RegExp(`^${label}$`, "i"),
      });
      return { label, count };
    }),
  );

  return results;
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
