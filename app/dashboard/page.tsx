import React from "react";
import Layout from "../components/layout";
import TotalCard from "../components/dashboard/totalCards";
import CardDataStats from "../components/dashboard/totalCards";
import { FaUserGraduate } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

const page = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">

        {/* total user card */}
        <TotalCard title="Total Users" total="50">
          <FaUserGraduate
            style={{
              width: "2rem",
              height: "2rem",
              color: "#3B81F6",
            }}
          />
        </TotalCard>
        {/* total groups card */}
        <TotalCard title="Total Groups" total="15">
          <TiGroup
            style={{
              width: "2rem",
              height: "2rem",
              color: "#3B81F6",
            }}
          />
        </TotalCard>
        <TotalCard title="Total Groups" total="15">
          <TiGroup
            style={{
              width: "2rem",
              height: "2rem",
              color: "#3B81F6",
            }}
          />
        </TotalCard>
        <TotalCard title="Total Groups" total="15">
          <TiGroup
            style={{
              width: "2rem",
              height: "2rem",
              color: "#3B81F6",
            }}
          />
        </TotalCard>
        
      </div>
    </Layout>
  );
};
export default page;
