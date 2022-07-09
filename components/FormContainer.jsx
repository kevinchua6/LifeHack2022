import React, { useState } from "react";
import PostalCodeTextField from "./PostalCodeTextField";
import MultipleSelectChip from "./MultipleSelectChip";
import SubmitButton from "./SubmitButton";

function FormContainer() {
  const [postalCode, setPostalCode] = useState("");
  const [eWaste, setEWaste] = useState([]);
  const onSubmit = () => {
    fetch(
      "/api/search?" +
        new URLSearchParams({
          address: address,
          types: types.join(","),
          limit: String(limit),
        })
    )
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
      });
  };
  return (
    <div>
      <PostalCodeTextField />
      <MultipleSelectChip />
      <SubmitButton />
    </div>
  );
}

export default FormContainer;
