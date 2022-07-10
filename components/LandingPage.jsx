import React from "react";
import Header from "./Header";
import FormContainer from "./FormContainer";

function LandingPage({ setResults, setIsSuccess }) {
  return (
    <div style={{ width: "60%" }}>
      <Header />
      <FormContainer setResults={setResults} setIsSuccess={setIsSuccess} />
    </div>
  );
}

export default LandingPage;
