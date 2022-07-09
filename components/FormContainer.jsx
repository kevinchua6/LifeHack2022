import React, { useState } from "react";
import PostalCodeTextField from "./PostalCodeTextField";
import MultipleSelectChip from "./MultipleSelectChip";
import SubmitButton from "./SubmitButton";

const LIMIT = 10;
function FormContainer({ setResults }) {
  const [postalCode, setPostalCode] = useState("");
  const [eWaste, setEWaste] = useState([]);
  const sendData = () => {
    fetch(
      "/api/search?" +
        new URLSearchParams({
          address: postalCode,
          types: eWaste.join("|"),
          limit: String(LIMIT),
        })
    )
      .then((response) => response.json())
      .then((results) => {
        setResults(results);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <PostalCodeTextField
        postalCode={postalCode}
        setPostalCode={setPostalCode}
      />
      <MultipleSelectChip eWaste={eWaste} setEWaste={setEWaste} />
      <SubmitButton sendData={sendData} />
    </div>
  );
}

export default FormContainer;
