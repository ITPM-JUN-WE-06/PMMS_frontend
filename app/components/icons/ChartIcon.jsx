import * as React from "react";
import { FaRegChartBar } from "react-icons/fa";

function ChartIcon({ fill = "#6C7281", ...rest }) {
  return (
    <div
  style={{
    
  }}
>
  <FaRegChartBar
    style={{
      width: 30,
          height:30,
          color: "#036EFF",
    }}
  />
</div>
  );
}

export default ChartIcon;