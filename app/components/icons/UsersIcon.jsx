import * as React from "react";
import { RiGroupLine } from "react-icons/ri";

function UsersIcon({ stroke = "#6C7281", ...rest }) {
  return (
    <div
>
  <RiGroupLine
    style={{
      width: 30,
          height:30,
          color: "#036EFF",
    }}
  />
</div>
  );
}

export default UsersIcon;
