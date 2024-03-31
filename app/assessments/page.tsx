import React from "react";
import Layout from "../components/Layouts/DefaultLayout";
import AssessmentList from "../components/assessment/AssessmentList";
import Button from "../components/button";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <div className="container mx-auto">
      
        <div className="flex justify-end">
          <Link href="/assessments/createNewAssessment">
            <Button name="Create New Assessment" />
          </Link>
        </div>
        <AssessmentList />
      </div>
    </Layout>
  );
};

export default page;
