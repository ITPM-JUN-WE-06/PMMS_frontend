import React from "react";
import Layout from "@/app/components/layout";
import PresentationCreationForm from "@/app/components/presentation/PresentationCreationForm";

const page = () => {
  return (
    <Layout>
      <div className="container mx-auto px-3 py-12">
        <PresentationCreationForm />
      </div>
    </Layout>
  );
};

export default page;
