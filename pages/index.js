import LandingPage from "../components/LandingPage";
import Maps from "../components/Maps";
import { useState } from "react";
import List from "../components/List";
import { Typography } from "@mui/material";
import Head from "next/head";

const Home = () => {
  const [results, setResults] = useState([]);
  const [sideInfo, setSideInfo] = useState({});

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
              padding: "15px",
            }}
          >
            <Typography sx={{ fontSize: 17 }}>Service Point Name</Typography>

            <Typography variant="h5" component="div">
              {sideInfo.servicePointName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {sideInfo.collectionType}
            </Typography>

            <a href={sideInfo.directions} target="_blank" rel="noreferrer">
              {sideInfo.location + " " + Math.trunc(sideInfo.postalCode)}
            </a>

            <Typography variant="h5" component="div">
              Remarks:
            </Typography>
            <Typography paragraph>{sideInfo.remarks}</Typography>
            <Typography variant="h5" component="div">
              Website:
            </Typography>
            <a href={sideInfo.website} target="_blank" rel="noreferrer">
              {sideInfo.website}
            </a>
          </div>
        </div>

        <Maps coordinates={results} setSideInfo={setSideInfo} />
      </section>
    </div>
  );
};
export default Home;
