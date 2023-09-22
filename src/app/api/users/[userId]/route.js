import { User } from "@/models/user";
import { NextResponse } from "next/server";

// Get the single user from the server
export async function GET(request, { params }) {
  const { userId } = params;
  let user;
  try {
    // user = await User.findById(userId);
    user = await User.findById(userId)
  } catch (error) {
    return NextResponse.json({ error: error });
  }
  return NextResponse.json(user);
}

// delete user from the database
export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error in deleting user",
      success: true,
    });
  }
  return NextResponse.json({
    message: "deleted user successfully",
    success: true,
  });
}

// update user
export const PUT = async (request, { params }) => {
  const { userId } = params;
  const { name, password, profile_Url, about } = await request.json();
  let user;
  try {
    user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.profile_Url = profile_Url;
    user.about = about;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
