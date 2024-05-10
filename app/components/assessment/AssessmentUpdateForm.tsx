"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";


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
      setNewModuleName(data.moduleName);
      setNewAssessmentName(data.assessmentName);
      setNewAssessmentType(data.assessmentType);
      setNewAssessmentDescription(data.assessmentDescription);
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

      window.location.href = "/assessments";

      // Handle success (e.g., show a success message)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg">
      <h2 className="text-2xl text-primary font-bold mb-5">
        Update Assessment
      </h2>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder={"Module Name"}
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
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Assessment Type
        </label>
        <label className="block text-gray-700 text-sm mb-2">
          <input
            type="radio"
            name="assessmentType"
            value="presentation"
            checked={newassessmentType === "presentation"}
            onChange={(e) => setNewAssessmentType(e.target.value)}
            className="border p-2 rounded-lg text-primary"
          />
          presentation
        </label>
        <label className="block text-gray-700 text-sm mb-2">
          <input
            type="radio"
            name="assessmentType"
            value="report"
            checked={newassessmentType === "report"}
            onChange={(e) => setNewAssessmentType(e.target.value)}
            className="border p-2 rounded-lg text-primary"
          />
          report
        </label>

        <textarea
          placeholder="Assessment Description"
          value={newassessmentDescription}
          onChange={(e) => setNewAssessmentDescription(e.target.value)}
          className="border p-2 rounded-lg text-primary"
        />

        {/* <Link href="/assessments">
<Button name="Create New Assessment" />
</Link> */}

        {/* <Link href="/assessments"> */}
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-lg"
          >
            Update Assessment
          </button>
        {/* </Link> */}
      </div>
    </form>
  );
};

type AssessmentUpdateFormProps = {
  id: string;
};

export default AssessmentUpdateForm;
