import React, { useEffect, useState } from "react";
import PostalCodeTextField from "./PostalCodeTextField";
import MultipleSelectChip from "./MultipleSelectChip";
import SubmitButton from "./SubmitButton";
import { eWasteList } from "./MultipleSelectChip";

const LIMIT = 10;

const UTOWN_POSTAL_CODE = "138601";

function FormContainer({ setResults, setIsSuccess }) {
  const [postalCode, setPostalCode] = useState("");
  const [eWaste, setEWaste] = useState([]);

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  useEffect(() => {
    sendData();
  }, []);

  const sendData = () => {
    fetch(
      "/api/search?" +
        new URLSearchParams({
          address: postalCode || UTOWN_POSTAL_CODE,
          types: eWaste.length > 0 ? eWaste.join("|") : eWasteList[0],
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
        isSubmitClicked={isSubmitClicked}
      />
      <MultipleSelectChip eWaste={eWaste} setEWaste={setEWaste} />
      <SubmitButton
        sendData={sendData}
        postalCode={postalCode}
        setIsSubmitClicked={setIsSubmitClicked}
        setIsSuccess={setIsSuccess}
      />
    </div>
  );
}

export default FormContainer;
