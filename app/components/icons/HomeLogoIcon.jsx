import * as React from "react";
import { LiaSchoolSolid } from "react-icons/lia";

function HomeLogoIcon({ fill = "#3B81F6", ...rest }) {
  return (
    <div>
      <LiaSchoolSolid
        style={{
          color: "#036EFF",
          display: "block",
          width: "200px",
          height: "200px",
        }}
      />
    </div>
  );
}

export default HomeLogoIcon;