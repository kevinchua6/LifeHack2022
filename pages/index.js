import LandingPage from "../components/LandingPage";
import Maps from "../components/Maps";
import { useState } from "react";
import Sidebar from "../components/List";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Head from "next/head";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import LanguageIcon from "@mui/icons-material/Language";

const Home = () => {
  const [results, setResults] = useState([]);
  const [sideInfo, setSideInfo] = useState({});
  const [showSideInfo, setShowSideInfo] = useState(false);

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
          <Sidebar list={results} />
          {showSideInfo && (
            <div
              style={{
                marginLeft: "20px",
                width: "30vw",
                borderRadius: "11px",
                background: "white",
                padding: "25px",
              }}
            >
              {/* Align a close button to right */}
              <IconButton
                aria-label="close"
                style={{ float: "right" }}
                onClick={() => setShowSideInfo(false)}
              >
                <CloseIcon />
              </IconButton>

              <Typography variant="h4" component="div">
                {sideInfo.servicePointName}
              </Typography>

              <Typography sx={{ mb: 2 }} color="text.secondary">
                {sideInfo.collectionType}
              </Typography>

              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        sideInfo.location +
                        " S" +
                        Math.trunc(sideInfo.postalCode)
                      }
                      onClick={() => window.open(sideInfo.directions, "_blank")}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FormatAlignCenterIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={sideInfo.remarks}
                      onClick={() => {
                        navigator.clipboard.writeText(sideInfo.remarks);
                      }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={sideInfo.website}
                      onClick={() => window.open(sideInfo.website, "_blank")}
                    />
                  </ListItemButton>
                </ListItem>
              </List>

              {/* <a href={sideInfo.directions} target="_blank" rel="noreferrer">
                {sideInfo.location + " S" + Math.trunc(sideInfo.postalCode)}
              </a> */}

              {/* <Typography variant="h5" component="div">
                Remarks:
              </Typography>
              <Typography paragraph>{sideInfo.remarks}</Typography> */}
              {/* <Typography variant="h5" component="div">
                Website:
              </Typography> */}
              {/* <a href={sideInfo.website} target="_blank" rel="noreferrer">
                {sideInfo.website}
              </a> */}
            </div>
          )}
        </div>

        <Maps
          coordinates={results}
          setSideInfo={setSideInfo}
          setShowSideInfo={setShowSideInfo}
        />
      </section>
    </div>
  );
};
export default Home;
