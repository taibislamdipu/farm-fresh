import dbConnect from "@/dbConnect/mongo";
import cloudinary from "@/lib/cloudinary";
import productModel from "@/models/product-model";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  await dbConnect();

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

export const DELETE = async (req, { params }) => {
  await dbConnect();
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { message: "Product ID missing" },
      { status: 400 },
    );
  }

  try {
    const product = await productModel.findById(id);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    // Delete images from Cloudinary
    for (const imageUrl of product.images) {
      const publicId = imageUrl.split("/").pop().split(".")[0]; // extract public_id from URL
      await cloudinary.uploader.destroy(`farm-fresh/products/${publicId}`);
    }

    // Delete product from MongoDB
    await productModel.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
