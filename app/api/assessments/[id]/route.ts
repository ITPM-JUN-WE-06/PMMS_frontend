import { NextResponse } from "next/server";
import Assessment from "../../../../models/assessments/assessment";
import connectMongoDB from "../../../../libs/connectMongoDB";


//Update a selected assessment
export async function PUT(request: any, { params }: { params: any }) {
  try {
    const { id } = params;
    const {
      newmoduleName: moduleName,
      newassessmentName: assessmentName,
      newassessmentType: assessmentType,
      newassessmentDescription: assessmentDescription,
    } = await request.json();
    await connectMongoDB();
    await Assessment.findByIdAndUpdate(id, {
      moduleName,
      assessmentName,
      assessmentType,
      assessmentDescription,
    });
    return NextResponse.json(
      { message: "Assessment updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

//get a selected assessment
export async function GET(request: any, { params }: { params: any }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const assessment = await Assessment.findOne({ _id: id });
    return NextResponse.json({ assessment }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
