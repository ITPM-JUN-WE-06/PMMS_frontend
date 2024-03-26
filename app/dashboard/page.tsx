import React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import TotalUserCard from "./totalusercard";

const page = () => {
  return (
    <Layout>
      <h1 className="text-text-primary">Dashboard</h1>
      <div className="columns-3 ...">
        <TotalUserCard title="dfd" details="dcsdvcs" />
        <TotalUserCard title="dfd" details="dcsdvcs" />
        <TotalUserCard title="dfd" details="dcsdvcs" />
      </div>
    </Layout>
  );
};
export default page;
