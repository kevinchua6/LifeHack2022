import LandingPage from "../components/LandingPage";
import Maps from "../components/Maps";
import { useState } from "react";
import List from "../components/List";
import Head from "next/head";

const Home = () => {
  const [results, setResults] = useState([]);
  const [sideInfo, setSideInfo] = useState({});
  console.log(results);

  return (
    <div>
      <Head>
        <title>Recycle Go Where</title>
        <link rel="icon" href="/green.png" />
      </Head>
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          borderRadius: "11px",
          alignItems: "center",
        }}
      >
        <LandingPage setResults={setResults} />
      </section>

      <section style={{ position: "relative" }}>
        <div className="wrapper">
          <List list={results} />
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "20px",
              width: "100%",
              borderRadius: "11px",
              background: "white",
            }}
          >
            {sideInfo.servicePointName}
          </div>
        </div>

        <Maps coordinates={results} setSideInfo={setSideInfo} />
      </section>
    </div>
  );
};
export default Home;
