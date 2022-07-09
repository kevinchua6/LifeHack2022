import React from "react";
import Button from "@mui/material/Button";

function SubmitButton() {
  const onClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <Button variant="contained" onClick={onClick}>
      Submit
    </Button>
  );
}

export default SubmitButton;
