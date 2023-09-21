import { NextRequest, NextResponse } from "next/server";

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

export function POST() {}

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
