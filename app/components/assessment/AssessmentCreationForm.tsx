"use client"
import React, { useState } from "react";
import Link from "next/link";

const AssessmentCreationForm = () => {
  const [moduleName, setModuleName] = useState("");
  const [assessmentName, setAssessmentName] = useState("");
  const [assessmentType, setAssessmentType] = useState("");
  const [assessmentDescription, setAssessmentDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!moduleName || !assessmentName || !assessmentType || !assessmentDescription) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/assessments", {
        method: "POST",
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

      if (res.ok) {
        // Redirect to "/assessments" after successful creation
        window.location.href = "/assessments";
      } else {
        throw new Error("Failed to create assessment");
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="moduleName"
          >
            Module Name
          </label>
          <input
            onChange={(e) => setModuleName(e.target.value)}
            value={moduleName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="moduleName"
            type="text"
            placeholder="Module Name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="assessmentName"
          >
            Assessment Name
          </label>
          <input
            onChange={(e) => setAssessmentName(e.target.value)}
            value={assessmentName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="assessmentName"
            type="text"
            placeholder="Assessment Name"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Assignment Type
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input
              onChange={() => setAssessmentType("presentation")}
              checked={assessmentType === "presentation"}
              type="radio"
              name="assessmentType"
              className="radio"
            />
            Presentation
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input
              onChange={() => setAssessmentType("report")}
              checked={assessmentType === "report"}
              type="radio"
              name="assessmentType"
              className="radio"
            />
            Report
          </label>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="assessmentDescription"
          >
            Assessment Description
          </label>
          <textarea
            onChange={(e) => setAssessmentDescription(e.target.value)}
            value={assessmentDescription}
            className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="assessmentDescription"
            placeholder="Description"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Assessment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssessmentCreationForm;
