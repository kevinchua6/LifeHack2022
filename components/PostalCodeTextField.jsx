import React from "react";
import TextField from "@mui/material/TextField";

function PostalCodeTextField({ postalCode, setPostalCode, isSubmitClicked }) {
  const onChange = (event) => {
    if (event.target.value.length > 6) return;
    setPostalCode(event.target.value);
  };
  //TODO: validate must be 6 length
  return (
    <TextField
      error={
        isSubmitClicked && postalCode.length !== 6 && !postalCode.length !== 0
      }
      id="outlined-basic"
      label="Enter postal code"
      helperText={
        isSubmitClicked &&
        postalCode.length !== 6 &&
        "Please enter a 6 character postal code"
      }
      variant="outlined"
      fullWidth
      color="success"
      value={postalCode}
      type="number"
      onChange={onChange}
    />
  );
}

export default PostalCodeTextField;
