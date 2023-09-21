import { NextResponse } from "next/server";

export function GET(request) {
  const todos = [
    { id: 1, text: "Go to workspace" },
    { id: 2, text: "go to gym" },
    { id: 3, text: "Go to office" },
    { id: 4, text: "Go to home" },
  ];
  return NextResponse.json(todos);
}

