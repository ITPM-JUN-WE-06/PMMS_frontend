import * as React from "react";
import { LiaSchoolSolid } from "react-icons/lia";

function Logo({ fill = "#3B81F6", ...rest }) {
  return (
    <div>
      <LiaSchoolSolid
        style={{
          width: 60,
          height: 50,
          color: "#036EFF",
        }}
      />
    </div>
  );
}

export default Logo;
