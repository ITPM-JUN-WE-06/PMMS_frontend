// AssessmentUpdateForm.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface AssessmentUpdateFormProps {
  id: string | null;
}

const AssessmentUpdateForm: React.FC<AssessmentUpdateFormProps> = ({ id }) => {
  
  const [moduleName, setModuleName] = useState("");
  const [assessmentName, setAssessmentName] = useState("");
  const [assessmentType, setAssessmentType] = useState("");
  const [assessmentDescription, setAssessmentDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/assessments/${id}`);
        if (!res.ok) {
          throw new Error("An error occurred while fetching the data");
        }
        const data = await res.json();
        const { moduleName, assessmentName, assessmentType, assessmentDescription } = data;
        setModuleName(moduleName);
        setAssessmentName(assessmentName);
        setAssessmentType(assessmentType);
        setAssessmentDescription(assessmentDescription);
      } catch (err) {
        console.log("Error loading assessment", err);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/UpdateAssessment?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          moduleName,
          assessmentName,
          assessmentType,
          assessmentDescription,
        }),
      });
      if (!res.ok) {
        const errorMessage = await res.text();
        throw new Error(`An error occurred while updating the assessment: ${errorMessage}`);
      }
      alert("Assessment updated successfully");
    } catch (err) {
      console.error("Error updating assessment", err);
      // Handle/display the error appropriately
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg">
      <h2 className="text-2xl text-primary font-bold mb-5">Update Assessment</h2>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Module Name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Assessment Name"
          value={assessmentName}
          onChange={(e) => setAssessmentName(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Assessment Type"
          value={assessmentType}
          onChange={(e) => setAssessmentType(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <textarea
          placeholder="Assessment Description"
          value={assessmentDescription}
          onChange={(e) => setAssessmentDescription(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-lg">
          Update Assessment
        </button>
      </div>
    </form>
  );
};

export default AssessmentUpdateForm;
