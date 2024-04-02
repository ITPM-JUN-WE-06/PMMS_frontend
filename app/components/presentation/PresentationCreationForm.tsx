import React from "react";
import Button from "../button";
import PannelDropdown from "../../components/presentation/pannelDropdown";

const PresentationCreationForm = () => {
  return (
    <div className="bg-white shadow-md rounded px-4 pt-1 pb-4 flex border p-8">
      <form>
        <div className="py-2 grid grid-rows-2 gap-4">
          <div className="py-2 grid grid-cols-4 gap-4">
            <div>
              <label
                className="block  text-text-light text-sm font-bold mb-2"
                htmlFor="projectModule"
              >
                Project Module
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="projectModule"
                type="text"
                placeholder="Project Module"
              />
            </div>

            <div>
              <label
                className="block  text-text-light text-sm font-bold mb-2"
                htmlFor="assessment"
              >
                Assessment
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="assessment"
                type="text"
                placeholder="Assessment"
              />
            </div>

            <div>
              <label
                className="block  text-text-light text-sm font-bold mb-2"
                htmlFor="presentationDate"
              >
                Presentation Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="presentationDate"
                type="text"
                placeholder="Presentation Date"
              />
            </div>

            <div>
              <label
                className="block  text-text-light text-sm font-bold mb-2"
                htmlFor="presentationVenue"
              >
                Presentation Venue
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="presentationVenue"
                type="text"
                placeholder="Presentation Venue"
              />
            </div>

            <div>
              <label
                className="block text-text-light text-sm font-bold mb-2"
                htmlFor="presentationTime"
              >
                Presentation Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="presentationTime"
                type="text"
                placeholder="Presentation Time"
              />
            </div>

            <div>
              <label
                className="block text-text-light text-sm font-bold mb-2"
                htmlFor="groupNumber"
              >
                Group Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="groupNumber"
                type="text"
                placeholder="Group Number"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-text-light text-sm font-bold mb-2"
              htmlFor="presentationTime"
            >
              Presentation Panel
            </label>
            <PannelDropdown />
            <div className="flex items-center justify-end gap-3">
              <Button name="create" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PresentationCreationForm;
