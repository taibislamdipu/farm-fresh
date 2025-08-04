import connectMongo from "@/dbConnect/mongo";
import cloudinary from "@/lib/cloudinary";
import userModel from "@/models/user-model";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectMongo();

  const formData = await req.formData();
  const firstName = formData.get("firstName");
  const userType = formData.get("userType");
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

  const newUser = { firstName, userType, profilePicture: imageUrl };

  try {
    await userModel.create(newUser);
    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
