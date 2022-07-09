import React from "react";
import Button from "@mui/material/Button";

function SubmitButton({ sendData }) {
  const onS = () => {
    sendData();
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "#2E8B57",
        width: "55%",
        height: "52px",
        textTransform: "none",
        fontSize: "16px",
      }}
      onClick={onS}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
