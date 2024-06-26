"useclient";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import PencilIcon from "../icons/EditPencilIcon";

const getAssessment = async () => {
  console.log("fetcs");
  try {
    const res = await fetch("http://localhost:3000/api/assessments", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("An error occurred while fetching the data");
    }
    return res.json();
  } catch (err) {
    console.log("Error loading assessments", err);
  }
};

export default async function AssessmentList() {
  let assess: any[] = [];
  try {
    const data = await getAssessment();
    if (data && data.assessments){
      assess = data.assessments;
    
    }
  } catch (err) {
    console.log("error loading assessment", err);
  }

  return (
    <>
      {assess.map((a: any) => (
        <div
          key={a._id}
          className=" bg-white p-4 border my-3 flex justify-between gap-5 items-start rounded-lg shadow-md"
        >
          <div>
            <h2 className="text-2xl text-primary font-bold  ">{a.moduleName}</h2>
            <div className="text-sm  text-text-light">{a.assessmentDescription}</div>
            <div className="text-sm  text-text-light">{a.assessmentType}</div>
            <div className="text-sm  text-text-light">{a.assessmentName}</div>
          </div>

          <div className="flex gap-6">
            <RemoveBtn id={a._id} />
            {/* <Link href={`/UpdateAssessment/${a._id}`}> */}
            {/* <Link href={`assessments/UpdateAssessment/`}> */}
            <Link href={{
              pathname: '/assessments/UpdateAssessment',
              query: { id: a._id,
               },

            }}>
              <PencilIcon />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
