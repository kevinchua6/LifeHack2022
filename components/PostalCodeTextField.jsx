import React from "react";
import TextField from "@mui/material/TextField";

function PostalCodeTextField() {
  return (
    <TextField
      id="outlined-basic"
      label="Enter postal code"
      variant="outlined"
      style = {{width: '55%'}}
    />
  );
}

export default PostalCodeTextField;
