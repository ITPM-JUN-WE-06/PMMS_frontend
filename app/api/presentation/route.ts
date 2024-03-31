import { NextResponse } from "next/server";
import Presentation from "../../../models/presentation/presentation";
import connectMongoDB from "../../../libs/connectMongoDB";

//Create a presentation
export async function POST(request: any) {
  try {
    const {
      projectModule,
      assessmentName,
      date,
      venue,
      time,
      groupNumber,
      presentationPanel

    } = await request.json();
    await connectMongoDB();
    await Presentation.create({
        projectModule,
        assessmentName,
        date,
        venue,
        time,
        groupNumber,
        presentationPanel
    });
    return NextResponse.json(
      { message: "Presentation schedule created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

//Get the list of all presentation schedule
export async function GET(request: any) {
  try {
    await connectMongoDB();
    const presentation = await Presentation.find();
    return NextResponse.json({ presentation });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

//Delete a presentation schedule
export async function DELETE(request: any) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Presentation.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Presentation schedule deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}