import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />

      <div className="bg-secondary flex-1 p-4 text-white">{children}</div>
    </div>
  );
};

export default Layout;
