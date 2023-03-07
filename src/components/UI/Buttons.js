import React from "react";
import Button from "@mui/material/Button";

function Buttons(props) {
  return (
    <Button
      variant="contained"
      size="small"
      color="secondary"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default Buttons;
