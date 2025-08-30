import connectMongo from "@/dbConnect/mongo";
import cloudinary from "@/lib/cloudinary";
import productModel from "@/models/product-model";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  console.log("PATCH params:", params);
  await connectMongo();

  try {
    const formData = await req.formData();

    const updateFields = {};
    if (formData.get("name")) updateFields.name = formData.get("name");
    if (formData.get("category"))
      updateFields.category = formData.get("category");
    if (formData.get("description"))
      updateFields.description = formData.get("description");
    if (formData.get("pricePerUnit"))
      updateFields.pricePerUnit = formData.get("pricePerUnit");
    if (formData.get("unit")) updateFields.unit = formData.get("unit");
    if (formData.get("stock")) updateFields.stock = formData.get("stock");
    if (formData.get("farmLocation"))
      updateFields.farmLocation = formData.get("farmLocation");
    if (formData.get("harvestDate"))
      updateFields.harvestDate = formData.get("harvestDate");

    const features = formData.getAll("features");
    if (features.length > 0) updateFields.productFeatures = features;

    // Handle new images
    const images = formData.getAll("images");
    if (images && images.length > 0) {
      const imageUrls = [];
      for (const image of images) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploaded = await new Promise((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              { folder: "farm-fresh/products" },
              (error, result) => {
                if (error) return reject(error);
                resolve(result);
              },
            )
            .end(buffer);
        });

        imageUrls.push(uploaded.secure_url);
      }
      updateFields.images = imageUrls;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      params.id,
      { $set: updateFields },
      { new: true, runValidators: true },
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Product has been updated", product: updatedProduct },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
