
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// interface AssessmentUpdateFormProps {
//   id: string | null;
//   assessmentName: string;
//   assessmentType: string;
//   assessmentDescription: string;
// }
const AssessmentUpdateForm: React.FC<AssessmentUpdateFormProps> = ({ id }) => {

  console.log(id);
// const AssessmentUpdateForm=() => {
// const AssessmentUpdateForm: React.FC<AssessmentUpdateFormProps> = ({ id, assessmentName, assessmentType, assessmentDescription }) => {
// const[newassessmentName, setnewassessmentName]=useState(assessmentName);
  // const[newassessmentType, setnewassessmentType]=useState(assessmentType);
  // const[newassessmentDescription, setnewassessmentDescription]=useState(assessmentDescription);

  
const fetchData = async () => {
  try {
      const res = await fetch(`http://localhost:3000/api/assessment/${id}`);
      if (!res.ok) {
          throw new Error("Failed to fetch assessment");
      }
      console.log(res);
      const data = await res.json();
      // Use the data here
  } catch (error) {
      console.error(error);
  }
};
  // const handleSubmit = async (e:any) => {
  //      e.preventDefault();

  //   try {
  //     const res = await fetch(`http://localhost:3000/api/assessment/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({ assessmentName,assessmentType,assessmentDescription  }),
  //     });

  //     if (!res.ok) {
  //       throw new Error("Failed to update assessment");
  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }
  //};

  return (
    <form  className="bg-white p-10 rounded-lg">
      <h2 className="text-2xl text-primary font-bold mb-5">Update Assessment</h2>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Module Name"
          //value={moduleName}
          //onChange={(e) => setModuleName(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Assessment Name"
          //value={assessmentName}
          //onChange={(e) => setAssessmentName(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Assessment Type"
          //value={assessmentType}
          //onChange={(e) => setAssessmentType(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <textarea
          placeholder="Assessment Description"
          //value={assessmentDescription}
          //onChange={(e) => setAssessmentDescription(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-lg">
          Update Assessment
        </button>
      </div>
    </form>
  );
};

type AssessmentUpdateFormProps = {
  id: string;
};



export default AssessmentUpdateForm;
