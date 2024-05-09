"useclient"
import React from "react";
import Layout from "../../../components/Layouts/DefaultLayout";
import AssessmentUpdateForm from "@/app/components/assessment/AssessmentUpdateForm";

const getAssesmentById = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/assessments/${id}`, {
            cache: "no-store",
        });
        console.log(res)
        if (!res.ok) {
            throw new Error("An error occurred while fetching the data");
        }
        return res.json();
    } catch (err) {
        console.log("Error loading assessments", err);
    }
}

// export default async function UpdateAssessment({params}: {params: any}) {
//     const { id } = params;
//     const assessment = await getAssesmentById(id);
    
//     if (!assessment || !assessment.moduleName) {
//         console.error('Assessment or moduleName is undefined');
//         return;
//     }

//     const {moduleName} = assessment;
//     const {assessmentName, assessmentType, assessmentDescription} = moduleName;
//     console.log(id);
    
//     return (
//         <Layout>
//             <div className="container mx-auto px-3 py-12">
//                 <AssessmentUpdateForm id={id} assessmentName={assessmentName} assessmentType={assessmentType} assessmentDescription={assessmentDescription} />
//             </div>
//         </Layout>
//     );
// };

export default async function UpdateAssessment({params}: {params: any}) {
    const { id } = params;
    const assessment = await getAssesmentById(id); // Declare the 'assessment' variable
    console.log("Assessment object:", assessment);
    const { assessmentName, assessmentType, assessmentDescription } = assessment._id;
  
    return <AssessmentUpdateForm id={id} assessmentName={assessmentName} assessmentType={assessmentType} assessmentDescription={assessmentDescription} />;
  }
  