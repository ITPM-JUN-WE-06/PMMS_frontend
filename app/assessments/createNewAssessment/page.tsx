import React from "react";
import Layout from "@/app/components/layout";
import AssessmentCreationForm from "@/app/components/assessment/AssessmentCreationForm";

const page = () => {
  return (
    <Layout>
      <div className="container mx-auto px-3 py-12">
        <AssessmentCreationForm />
      </div>
    </Layout>
  );
};

export default page;
