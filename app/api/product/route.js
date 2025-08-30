import connectMongo from "@/dbConnect/mongo";
import cloudinary from "@/lib/cloudinary";
import productModel from "@/models/product-model";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectMongo();

  const formData = await req.formData();

  const name = formData.get("name");
  const category = formData.get("category");
  const description = formData.get("description");
  const pricePerUnit = formData.get("pricePerUnit");
  const unit = formData.get("unit");
  const stock = formData.get("stock");
  const images = formData.getAll("images");
  const farmLocation = formData.get("farmLocation");
  const harvestDate = formData.get("harvestDate");
  const productFeatures = formData.getAll("features");

  const imageUrls = [];

  for (const image of images) {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploaded = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "farm-fresh/products" }, (error, result) => {
          if (error) return reject(error);
          resolve(result);
        })
        .end(buffer);
    });

    imageUrls.push(uploaded.secure_url);
  }

  const newProduct = {
    name,
    category,
    description,
    pricePerUnit,
    unit,
    stock,
    images: imageUrls,
    farmLocation,
    harvestDate,
    productFeatures,
  };

  try {
    await productModel.create(newProduct);
    return NextResponse.json(
      { message: "Product has been created", product: newProduct },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
