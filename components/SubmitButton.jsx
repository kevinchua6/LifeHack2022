import React from "react";
import Button from "@mui/material/Button";

function SubmitButton({ sendData, postalCode, setIsSubmitClicked }) {
  const onS = () => {
    setIsSubmitClicked(true);
    if (postalCode.length !== 6) return;
    sendData();
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "#2E8B57",
        width: "100%",
        height: "54px",
        textTransform: "none",
        fontSize: "16px",
      }}
      onClick={onS}
    >
      Recycle Now
    </Button>
  );
}

export default SubmitButton;
