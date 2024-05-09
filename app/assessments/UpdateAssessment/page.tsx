"useclient"
import React from "react";
import Layout from "../../components/Layouts/DefaultLayout";
import AssessmentUpdateForm from "@/app/components/assessment/AssessmentUpdateForm";



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

// 

const UpdateAssessment=({searchParams}: {searchParams:{id: string}}) =>{
    // const { id } = params;
    // const assessment = await getAssesmentById(id); // Fetch assessment data

    // console.log("Assessment object:", assessment);

    // if (!assessment || !assessment.assessmentName) {
    //     console.error('Assessment or assessmentName is undefined');
    //     return null; // Return null or some default UI if assessment data is not available
    // }

    // const { moduleName, assessmentName, assessmentType, assessmentDescription } = assessment;
    console.log(searchParams.id)
    return (
        <Layout>
            <div className="container mx-auto px-3 py-12">
                {/* <AssessmentUpdateForm id={id} assessmentName={assessmentName} assessmentType={assessmentType} assessmentDescription={assessmentDescription} /> */}
                <AssessmentUpdateForm id = {searchParams.id}/>
            </div>
        </Layout>
    );
}
export default UpdateAssessment;
