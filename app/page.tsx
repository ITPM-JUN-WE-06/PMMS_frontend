"use client";
import Layout from "./components/layout";
import React, { ReactNode } from "react";
import HomeLogoIcon from "./components/icons/homeLogoIcon";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function Home() {
  return (
    <main>
      <Layout>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <h1
          style={{
            fontSize: "60px",
            textAlign: "center",
            fontFamily: "unset",
            color: "InfoText",
            fontWeight: "bold",
          }}
        >
          Module Minder
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HomeLogoIcon style={{ alignSelf: "center" }} />
        </div>
      </Layout>
    </main>
  );
}
