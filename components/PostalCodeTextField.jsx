import React from "react";
import TextField from "@mui/material/TextField";

function PostalCodeTextField({ postalCode, setPostalCode }) {
  const onChange = (event) => {
    if (event.target.value.length > 6) return;
    setPostalCode(event.target.value);
  };
  //TODO: validate must be 6 length
  return (
    <TextField
      id="outlined-basic"
      label="Enter postal code"
      variant="outlined"
      style={{ width: "55%"}}
      color="success"
      value={postalCode}
      type="number"
      onChange={onChange}
    />
  );
}

export default PostalCodeTextField;
