import * as React from "react";
import { GoSidebarCollapse } from "react-icons/go";

function CollapsIcon({ fill = "#6C7281", ...rest }) {
  return (
    <div
  style={{
    
  }}
>
  <GoSidebarCollapse
    style={{
      width: 30,
          height:30,
          color: "#6C7281",
    }}
  />
</div>
  );
}

export default CollapsIcon;
