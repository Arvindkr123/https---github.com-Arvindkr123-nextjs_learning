import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  let users = [];
  try {
    // users = await User.find();
    // users = await User.find().select("-password");
    // users = await User.find().select("-_id");
    users = await User.find().select("-__v");
  } catch (error) {
    console.log(error);
    return NextResponse({
      message: "Couldn't find users",
      status: true,
    });
  }
  return NextResponse.json(users);
}

export async function POST(request) {
  // const body = request.body;
  // console.log("this is body of req ", body);
  // console.log("method of the body", request.method);
  // console.log("cookies", request.cookies);
  // console.log("header", request.headers);

  // const jsonData = await request.json();
  // console.log(jsonData);

  // const textData = await request.text();
  // console.log(textData);

  // return NextResponse.json({
  //   message: "post data successfully",
  // });

  const { name, email, password, about, profileUrl } = await request.json();
  const user = new User({
    name,
    email,
    password,
    profileUrl,
    about,
  });

  try {
    const createdUser = await user.save();
    const response = NextResponse.json(createdUser, {
      status: 202,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user!",
    });
  }
}
