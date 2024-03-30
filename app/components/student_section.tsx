"use client"
import Link from "next/link";
import React, { useState } from "react";

const StudentSection: React.FC = () => {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "year") {
      setYear(value);
    } else if (name === "semester") {
      setSemester(value);
    }
  };

  const handleFilterSubmit = (e:any) => {
    e.preventDefault();
    setStudentList([
      { _id: "1", fullname: "Hashani", email: "hashani@maildrop.cc"},
      { _id: "2", fullname: "Shehani", email: "shehani@maildrop.cc"},
      { _id: "3", fullname: "Yehani", email: "yehani@maildrop.cc"},
    ]);
    setShowTable(true);
  };

  const handleSearch = (e:any) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = studentList.filter((student) =>
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-left justify-between">
      <form onSubmit={handleFilterSubmit}>
        <div className="flex mb-4">
          <div className="mr-4">
            <label className="block mb-1 text-blue-400" htmlFor="year">
              Year:
            </label>
            <select
              id="year"
              name="year"
              className="border border-gray-300 rounded p-2 text-black"
              value={year}
              onChange={handleFilterChange}
            >
              <option value="">Select Year</option>
              <option value="">Year 3</option>
              <option value="">Year 4</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-blue-400" htmlFor="semester">
              Semester:
            </label>
            <select
              id="semester"
              name="semester"
              className="border border-gray-300 rounded p-2 text-black mr-5"
              value={semester}
              onChange={handleFilterChange}
            >
              <option value="">Select Semester</option>
              <option value="">Semester 01</option>
              <option value="">Semester 02</option>
            </select>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mr-10"
            >
                Filter
            </button>
            <input
                type="text"
                placeholder="Search by Email"
                value={searchQuery}
                onChange={handleSearch}
                className="border border-gray-300 rounded px-2 py-1 mb-4"
            />
          </div>
        </div>
      </form>
      {showTable && (
        <div className="text-black">
          <h3 className="text-xl font-bold mb-4 text-blue-500">Student List</h3>
          <table className="border-collapse border border-white">
            <thead>
              <tr>
                <th className="border border-white px-20 py-2">ID</th>
                <th className="border border-white px-20 py-2">Full Name</th>
                <th className="border border-white px-20 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student) => (
                <tr key={student._id}>
                  <td className="border border-white px-20 py-2">{student._id}</td>
                  <td className="border border-white px-20 py-2">{student.fullname}</td>
                  <td className="border border-white px-20 py-2">{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentSection;
