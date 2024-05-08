import React from "react";
import Layout from "../components/Layouts/DefaultLayout";

const getMarks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/marks", {
      cache: "no-store",
      
    });
    if (!res.ok) {
      throw new Error("An error occurred while fetching the data");
    }
    return res.json();
  } catch (err) {
    console.log("Error loading marks", err);
  }
}

const page = () => {
  return (
    <Layout>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
    </div>
    </Layout>
  );
};

export default page;
