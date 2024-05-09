import { NextResponse } from "next/server";
import User from "../../../models/users/userModel";
import connectMongoDB from "../../../libs/connectMongoDB";

//Get the list of all users
export async function GET(request: any) {
  try {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}