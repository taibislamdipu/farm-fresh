import connectMongo from "@/dbConnect/mongo";
import productModel from "@/models/product-model";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  await connectMongo();

  const { name, category, description, pricePerUnit, productFeatures } =
    await req.json();

  const newProduct = {
    name,
    category,
    pricePerUnit,
    description,
    productFeatures,
  };

  try {
    await productModel.create(newProduct);
    return NextResponse.json(
      { message: "Product has been created" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
