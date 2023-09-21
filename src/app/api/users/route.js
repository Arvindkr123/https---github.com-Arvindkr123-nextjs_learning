import { connectDB } from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export function GET(request) {
  const users = [
    {
      name: "Ram Kumar",
      phone: 1334,
      course: "java",
    },
    {
      name: "Ankit Kumar",
      phone: 1334,
      course: "B pharma",
    },
    {
      name: "Shayam Kumar",
      phone: 1334,
      course: "Engg",
    },
    {
      name: "Manmohan Kumar",
      phone: 1334,
      course: "cpp",
    },
  ];
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

  const textData = await request.text();
  console.log(textData);

  return NextResponse.json({
    message: "post data successfully",
  });
}

export function DELETE(request) {
  console.log("deleted api called");
  return NextResponse.json(
    {
      message: "deleted successfully",
      status: true,
    },
    { status: 201, statusText: "Deleted successfully" }
  );
}
export function PUT() {}
