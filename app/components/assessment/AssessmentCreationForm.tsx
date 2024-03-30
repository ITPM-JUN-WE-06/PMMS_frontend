import React from "react";
import Button from "../button";

const AssessmentCreationForm = () => {
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Module Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Assessment Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Assignment Type
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input type="radio" name="radio-1" className="radio" />
            presentation
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <input type="radio" name="radio-1" className="radio" />
            report
          </label>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Assessment Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            placeholder="Description"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button name="create" />
        </div>
      </form>
    </div>
  );
};

export default AssessmentCreationForm;
