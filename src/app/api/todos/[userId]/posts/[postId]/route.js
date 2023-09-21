import { NextResponse } from "next/server";

export function GET(request, { params }) {
  //   console.log(params.userId, params.postId);
  const { userId, postId } = params;
  console.log(userId, postId);

  return NextResponse.json(params);
}
