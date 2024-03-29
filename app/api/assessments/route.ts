import { NextResponse } from "next/server";
import Assessment from "../../../models/assessments/assessment";
import connectMongoDB from "../../../libs/connectMongoDB";

//Create an assessment
export async function POST(request: any) {
  try {
    const {
      moduleName,
      assessmentName,
      assessmentType,
      assessmentDescription,
    } = await request.json();
    await connectMongoDB();
    await Assessment.create({
      moduleName,
      assessmentName,
      assessmentType,
      assessmentDescription,
    });
    return NextResponse.json(
      { message: "Assessment created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

//Get the list of all assessments
export async function GET(request: any) {
  try {
    await connectMongoDB();
    const assessments = await Assessment.find();
    return NextResponse.json({ assessments });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

//Delete an assessment
export async function DELETE(request: any) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Assessment.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Assessment deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
