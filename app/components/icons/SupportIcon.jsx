import * as React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";

function SupportIcon({ stroke = "#6C7281", ...rest }) {
  return (
    <div
>
  <MdOutlineSupportAgent
    style={{
      width: 30,
          height:30,
          color: "#036EFF",
    }}
  />
</div>
  );
}

export default SupportIcon;
