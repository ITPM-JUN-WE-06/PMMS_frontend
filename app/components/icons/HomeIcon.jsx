import * as React from "react";
import { LuLayoutDashboard } from "react-icons/lu";

function HomeIcon({ fill = "#6C7281", ...rest }) {
  return (
    <div
      
    >
      <LuLayoutDashboard
        style={{
          width: 30,
          height:30,
          color: "#036EFF",
        }}
      />
    </div>
  );
}

export default HomeIcon;
