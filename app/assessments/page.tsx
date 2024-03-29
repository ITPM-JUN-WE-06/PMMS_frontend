import React from "react";
import Layout from "../components/layout";
import AssessmentCreationForm from "../components/assessment/AssessmentCreationForm";
import AssessmentList from "../components/assessment/AssessmentList";

const page = () => {
  return (
    <Layout>
      <div className="container mx-auto px-3 py-12">
        <AssessmentList />
        <AssessmentCreationForm />
      </div>
    </Layout>
  );
};

export default page;
