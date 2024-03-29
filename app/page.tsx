"use client";
//import Layout from "./components/layout";
import Link from "next/link";
import React, { ReactNode } from "react";
import HomeLogoIcon from "./components/icons/homeLogoIcon";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Student from "../app/assets/students.svg";
import styled from "@emotion/styled";
import GoArrowIcon from "./components/icons/goArrowIcon";

import Image from "next/image"; // Import the Image component from next/image

export default function Home() {
  return (
    <div className="container px-12 ">
      <main className="grid grid-cols-2 gap-5 items-center justify-center h-screen">
        <div>
          <Image
            src={Student}
            alt="students"
            layout="responsive"
            width={700}
            height={400}
          />
        </div>
        <div className="items-center">
          <h1 className="text-2xl font-bold text-text-light py-4 flex justify-center">
            Welcome to !
          </h1>

          <h1 className="text-7xl font-bold text-text-primary flex justify-center">
            Module Minder
          </h1>

          <h1 className="text-3xl font-bold text-text-light py-4">
            The best way to keep track of your modules
          </h1>
          <h1 className="text-1xl text-text-light mt-1 ">
            Enhance the university project module management system with a
            user-friendly homepage, optimizing project management organization
            and integrating students and faculty seamlessly. Utilize the
            homepage to track attendance, assess performance, and provide
            feedback effortlessly. Users can access records, view marks, and
            communicate within the system with ease, all from the centralized
            homepage interface, ensuring efficient module management.
          </h1>
          <Link href={"/sign_in"}>
            <button className="flex justify-center py-2">
              <GoArrowIcon />
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

{
  /* <div className="flex justify-end">
<Link href="/assessments/createNewAssessment">
<Button name="Create New Assessment" />
</Link>
</div> */
}
