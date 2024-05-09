"use client";
import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layouts/DefaultLayout";
import AssessmentUpdateForm from "@/app/components/assessment/AssessmentUpdateForm";
import { useSearchParams } from "next/navigation";

const Page = () => {
    const searchParams = useSearchParams();
    const id=searchParams.get("id");

    return (
        <Layout>
            <div className="container mx-auto px-3 py-12">
                <AssessmentUpdateForm id={id } />
            </div>
        </Layout>
    );
};

export default Page;
