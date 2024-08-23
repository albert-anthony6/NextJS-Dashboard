import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "../../../../../lib/utils";
import { Post } from "../../../../../lib/models";

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post.");
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post delete.");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post.");
  }
}
