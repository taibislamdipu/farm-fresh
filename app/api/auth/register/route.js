import connectMongo from "@/dbConnect/mongo";
import userModel from "@/models/user-model";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectMongo();

  const formData = await req.formData();
  const firstName = formData.get("firstName");
  const userType = formData.get("userType");
  const newUser = { firstName, userType };

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
