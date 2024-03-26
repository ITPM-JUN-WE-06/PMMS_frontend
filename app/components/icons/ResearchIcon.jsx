import * as React from "react";
import { LiaNewspaperSolid } from "react-icons/lia";

function PaperIcon({ fill = "#6C7281", ...rest }) {
  return (
    <div>
      <LiaNewspaperSolid
        style={{
          width: 30,
          height: 30,
          color: "#036EFF",
        }}
      />
    </div>
  );
}

export default PaperIcon;
