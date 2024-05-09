
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface AssessmentUpdateFormProps {
  id: string | null;
  assessmentName: string;
  assessmentType: string;
  assessmentDescription: string;
}


const AssessmentUpdateForm: React.FC<AssessmentUpdateFormProps> = ({ id, assessmentName, assessmentType, assessmentDescription }) => {

  const[newassessmentName, setnewassessmentName]=useState(assessmentName);
  const[newassessmentType, setnewassessmentType]=useState(assessmentType);
  const[newassessmentDescription, setnewassessmentDescription]=useState(assessmentDescription);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/assessment/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ assessmentName,assessmentType,assessmentDescription  }),
      });

      if (!res.ok) {
        throw new Error("Failed to update assessment");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setnewassessmentName(e.target.value)}
        value={newassessmentName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setnewassessmentType(e.target.value)}
        value={newassessmentType}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <input
        onChange={(e) => setnewassessmentDescription(e.target.value)}
        value={newassessmentDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default AssessmentUpdateForm;
