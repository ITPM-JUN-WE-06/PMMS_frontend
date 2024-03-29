import * as React from "react";
import { BsTrash } from "react-icons/bs";

function RemoveTrashIcon({ fill = "#6C7281", ...rest }) {
  return (
    <div style={{}}>
      <BsTrash
        style={{
          width: 20,
          height: 20,
          color: "#FF0000",
        }}
      />
    </div>
  );
}

export default RemoveTrashIcon;
