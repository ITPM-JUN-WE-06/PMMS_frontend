"use client"
import React from "react";
import Layout from "../components/Layouts/DefaultLayout";
import TotalCard from "../components/dashboard/totalCards";
import CardDataStats from "../components/dashboard/totalCards";
import { FaUserGraduate } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import ChartOne from "../components/Charts/ChartOne";
import ChartTwo from "../components/Charts/ChartTwo";
import ChartThree from "../components/Charts/ChartThree";


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
        <TotalCard title="Total Projects" total="15">
          <TiGroup
            style={{
              width: "2rem",
              height: "2rem",
              color: "#3B81F6",
            }}
          />
        </TotalCard>
        {/* <TotalCard title="Total " total="15">
          <TiGroup
            style={{
              width: "2rem",
              height: "2rem",
              color: "#3B81F6",
            }}
          />
        </TotalCard> */}
        
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo/>
        
        
       {/* <MapOne />
        <div className="col-span-12 xl:col-span-8">
         <TableOne />
        </div>
        <ChatCard /> */}
      </div>
      
    </Layout>
  );
};
export default page;
