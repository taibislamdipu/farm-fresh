import connectMongo from "@/dbConnect/mongo";
import cloudinary from "@/lib/cloudinary";
import userModel from "@/models/user-model";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  console.log("req--->", req);
  await connectMongo();

  const formData = await req.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const bio = formData.get("bio");
  const password = formData.get("password");
  const userType = formData.get("userType");
  const termsAccepted = formData.get("termsAccepted") === "true";
  const farmName = formData.get("farmName");
  const specialization = formData.get("specialization");
  const farmSize = formData.get("farmSize");
  const farmSizeUnit = formData.get("farmSizeUnit");

  const profilePicture = formData.get("profilePicture");

  let imageUrl = "";

  if (profilePicture && typeof profilePicture === "object") {
    const buffer = Buffer.from(await profilePicture.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "farm-fresh/users" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    imageUrl = uploadResult.secure_url;
  }

  const newUser = {
    profilePicture: imageUrl,
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    email,
    phone,
    address,
    bio,
    password,
    userType,
    termsAccepted,
    farmName,
    specialization,
    farmSize,
    farmSizeUnit,
    email,
  };

  try {
    await userModel.create(newUser);
    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
