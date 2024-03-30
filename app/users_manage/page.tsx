"use client"
import React, { useState } from "react";
import Layout from "../components/layout";
import StudentSection from "../components/student_section";
import StaffSection from "../components/staff_section";

const UserManage = () => {
  const [activeTab, setActiveTab] = useState("student");

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Layout>
        <div>
          <div className="flex justify-center mt-20 text-lg font-bold">
            <button
              className={`mr-2 px-4 py-2 rounded text-center ${
                activeTab === "student" ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={() => handleTabChange("student")}
            >
              <span className="text-white font-bold">
              Student
              </span>
            </button>
            <button
              className={`mr-2 px-4 py-2 rounded w-24 text-center ${
                activeTab === "staff" ? "bg-blue-500" : "bg-gray-500"
              }`}
              onClick={() => handleTabChange("staff")}
            >
              <span className="text-white font-bold">
              Staff
              </span>
            </button>
          </div>
          <div className="p-4">
            {activeTab === "student" && <StudentSection tab={activeTab} />}
            {activeTab === "staff" && <StaffSection />}
          </div>
        </div>
        </Layout>
    </div>
  );
};

export default UserManage;
