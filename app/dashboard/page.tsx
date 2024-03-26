import React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import TotalUserCard from "./totalusercard";


const page = () => {
  return (
    <div className="">
      
<div className="container mx-auto px-4">
      <Layout>
        
      <h1 className="text-text-primary">Dashboard</h1>
        <div className="columns-3 ...">
          <TotalUserCard title="dfd" details="dcsdvcs" 
           />
           <TotalUserCard title="dfd" details="dcsdvcs" 
           />
           <TotalUserCard title="dfd" details="dcsdvcs" 
           />
        </div>
      </Layout>
    </div>
    </div>
    
  );
};

export default page;
