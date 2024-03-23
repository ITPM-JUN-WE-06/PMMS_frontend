import Image from "next/image";
'use client'

import ResponsiveAppBar from "./components/navbar";
import SideBar from "./components/sidebar";

export default function Home() {
  return (
    <main>
      <div className="navbar-sidebar-container">
        <ResponsiveAppBar/>
        <SideBar/>
      </div>
    </main>   
  );
}
