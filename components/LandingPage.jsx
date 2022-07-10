import React from "react";
import Header from "./Header";
import FormContainer from "./FormContainer";

function LandingPage({ setResults }) {
  return (
    <div style={{ width: "60%" }}>
      <Header />
      <FormContainer setResults={setResults} />
    </div>
  );
}

export default LandingPage;
