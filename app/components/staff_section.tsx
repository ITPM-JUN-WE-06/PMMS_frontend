"use client"
import React, { useState } from "react";

interface Staff {
  id: number;
  name: string;
}

const StaffSection: React.FC = () => {
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  // Function to fetch staff data from API
  const fetchStaffData = () => {
    // Fetch staff data from API and set it to staffList state
    // Example:
    // fetch("api/staff")
    //   .then(response => response.json())
    //   .then(data => setStaffList(data));
  };

  // Function to handle staff selection
  const handleStaffSelection = (staff: Staff) => {
    setSelectedStaff(staff);
    setShowPopup(true);
  };

  // Function to handle role selection
  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
  };

  // Function to assign role to selected staff
  const assignRole = () => {
    // Call API to assign selectedRole to selectedStaff
    // Example:
    // fetch(`api/staff/${selectedStaff.id}/assignRole`, {
    //   method: "POST",
    //   body: JSON.stringify({ role: selectedRole }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle success or error
    // });
  };

  // Function to delete staff
  const deleteStaff = (staffId: number) => {
    // Call API to delete staff with given staffId
    // Example:
    // fetch(`api/staff/${staffId}`, {
    //   method: "DELETE"
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle success or error
    // });
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <h2 className="text-2xl font-bold mb-4 text-blue-500 items-center">Staff</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowPopup(true)}
      >
        Create Staff
      </button>
      <div className="flex flex-wrap">
        {staffList.map((staff) => (
          <div key={staff.id} className="p-4">
            <div>{staff.name}</div>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => handleStaffSelection(staff)}
            >
              View Details
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => deleteStaff(staff.id)}
            >
              Delete Staff
            </button>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded">
            <h3 className="text-xl font-bold mb-4">Staff Details</h3>
            {selectedStaff && (
              <div>
                <p>Name: {selectedStaff.name}</p>
                {/* Add more details as needed */}
              </div>
            )}
            <div className="flex mt-4">
              <select
                className="border border-gray-300 rounded p-2 mr-4"
                value={selectedRole}
                onChange={(e) => handleRoleSelection(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="examiner">Examiner</option>
                <option value="supervisor">Supervisor</option>
                <option value="co-supervisor">Co-Supervisor</option>
                <option value="project-member">Project Member</option>
              </select>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={assignRole}
              >
                Assign Role
              </button>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setShowPopup(false)}
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
