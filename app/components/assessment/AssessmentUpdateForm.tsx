
"use client";
import React, { useState, useEffect } from "react";

const AssessmentUpdateForm: React.FC<AssessmentUpdateFormProps> = ({ id }) => {
  const [newmoduleName, setNewModuleName] = useState("");
  const [newassessmentName, setNewAssessmentName] = useState("");
  const [newassessmentType, setNewAssessmentType] = useState("");
  const [newassessmentDescription, setNewAssessmentDescription] = useState("");

  useEffect(() => {
    // Fetch assessment data when the component mounts
    getAssessmentbyId(id);
  }, [id]);

  const getAssessmentbyId = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/assessments/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch assessment");
      }
      const data = await res.json();
      
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/assessments/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newmoduleName,
          newassessmentName,
          newassessmentType,
          newassessmentDescription,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update assessment");
      }

      // Handle success (e.g., show a success message)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg">
      <h2 className="text-2xl text-primary font-bold mb-5">Update Assessment</h2>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Module Name"
          value={newmoduleName}
          onChange={(e) => setNewModuleName(e.target.value)}
          className="border p-2 rounded-lg text-primary"
        />
        <input
          type="text"
          placeholder="Assessment Name"
          value={newassessmentName}
          onChange={(e) => setNewAssessmentName(e.target.value)}
          className="border p-2 rounded-lg text-primary"
        />
        <input
          type="text"
          placeholder="Assessment Type"
          value={newassessmentType}
          onChange={(e) => setNewAssessmentType(e.target.value)}
          className="border p-2 rounded-lg text-primary"
        />
        <textarea
          placeholder="Assessment Description"
          value={newassessmentDescription}
          onChange={(e) => setNewAssessmentDescription(e.target.value)}
          className="border p-2 rounded-lg text-primary"
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
