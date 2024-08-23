import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "../../../../lib/utils";
import { Post } from "../../../../lib/models";

export async function GET(request: NextRequest) {
  try {
    connectToDb();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts.");
  }
}
