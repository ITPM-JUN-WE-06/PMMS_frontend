"use client";
import Link from "next/link";
import React, { useState } from "react";

const StaffSection: React.FC = () => {
  const [staffList, setStaffList] = useState([
    { _id: "1", fullname: "Amal", email: "Amal@maildrop.cc", role: "examiner" },
    { _id: "2", fullname: "Kamal", email: "Kamal@maildrop.cc", role: "supervisor" },
    { _id: "3", fullname: "Saman", email: "Saman@maildrop.cc", role: "staff-member" },
  ]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e:any) => {
    setSearchQuery(e.target.value);
  };

  const handleStaffSelection = (staff, action) => {
    setSelectedStaff(staff);
    if (action === "update") {
      setShowUpdatePopup(true);
    } else if (action === "create") {
      setShowCreatePopup(true);
    }
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const assignRole = () => {
    // Handle role assignment here
    console.log("Assigning role:", selectedRole, "to staff:", selectedStaff);
    setShowUpdatePopup(false); // Close the update popup
    setShowCreatePopup(false); // Close the create popup
  };

  const deleteStaff = (staffId) => {
    // Handle staff deletion here
    console.log("Deleting staff:", staffId);
  };

  return (
    <div className="flex flex-col items-left justify-between">
       <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 ml-auto"
        onClick={() => handleStaffSelection(null, "create")}
      >
        Create Staff
      </button>
      <div>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchQuery}
        onChange={handleSearch}
        className="border border-gray-300 rounded px-2 py-1 mb-4 mr-5"
      />
      </div>
      <div className="text-black">
        <h2 className="text-xl font-bold mb-4 text-blue-500">Staff List</h2>
        <table className="border-collapse border border-white">
          <thead>
            <tr>
              <th className="border border-white px-10 py-2">ID</th>
              <th className="border border-white px-10 py-2">Full Name</th>
              <th className="border border-white px-10 py-2">Email</th>
              <th className="border border-white px-10 py-2">Role</th>
              <th className="border border-white px-20 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff._id}>
                <td className="border border-white px-10 py-2">{staff._id}</td>
                <td className="border border-white px-10 py-2">{staff.fullname}</td>
                <td className="border border-white px-10 py-2">{staff.email}</td>
                <td className="border border-white px-10 py-2">{staff.role}</td>
                <td className="border border-white px-20 py-2">
                  <button className="bg-blue-500 text-white px-5 py-1 rounded mr-5" onClick={() => handleStaffSelection(staff, "update")}>
                    Update
                  </button>
                  <button className="bg-red-500 text-white px-5 py-1 rounded" onClick={() => deleteStaff(staff._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showUpdatePopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-blue-100 p-8 rounded">
            <h3 className="text-xl text-blue-500 font-bold mb-4">Update Staff</h3>
            <div className="text-black">
              <p>Name: {selectedStaff ? selectedStaff.fullname : ""}</p>
              <p>Email: {selectedStaff ? selectedStaff.email : ""}</p>
              <p>Role: {selectedStaff ? selectedStaff.role : ""}</p>
              <div className="flex mt-4">
                <select
                  className="border border-gray-300 rounded p-2 mr-4 text-black"
                  value={selectedRole}
                  onChange={(e) => handleRoleSelection(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="examiner">Examiner</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="co-supervisor">Co-Supervisor</option>
                  <option value="staff-member">Staff Member</option>
                </select>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={assignRole}
                >
                  Assign Role
                </button>
              </div>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setShowUpdatePopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showCreatePopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-blue-100 p-8 rounded">
            <h3 className="text-xl text-blue-500 font-bold mb-4">Create Staff</h3>
            <div className=" text-black ">
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 mb-2"
              placeholder="Name"
              //value={selectedStaff ? selectedStaff.fullname : ""}
              //onChange={(e) => setSelectedStaff({ ...selectedStaff, fullname: e.target.value })}
            />
            <input
              type="text"
              className="border border-gray-300 rounded px-2 py-1 mb-2"
              placeholder="Email"
              //value={selectedStaff ? selectedStaff.email : ""}
              //onChange={(e) => setSelectedStaff({ ...selectedStaff, email: e.target.value })}
            />
            </div>
            <div className="flex mt-4">
              <select
                className="border border-gray-300 rounded p-2 mr-4 text-black"
                value={selectedRole}
                onChange={(e) => handleRoleSelection(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="examiner">Examiner</option>
                <option value="supervisor">Supervisor</option>
                <option value="co-supervisor">Co-Supervisor</option>
                <option value="staff-member">Staff Member</option>
              </select>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={assignRole}
              >
                Create
              </button>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setShowCreatePopup(false)} 
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffSection;
