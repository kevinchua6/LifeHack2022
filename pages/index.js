import LandingPage from "../components/LandingPage";
import Maps from "../components/Maps";
import { useState } from "react";
import Sidebar from "../components/List";
import {
  Button,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Typography,
} from "@mui/material";
import Head from "next/head";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import LanguageIcon from "@mui/icons-material/Language";

const ictEquipment = [
  "Printers",
  "Power banks",
  "Computers, laptops",
  "Mobile phones, tablets",
  "Modems, routers",
  "Network and set-top boxes",
  "Small TVs",
  "Desktop monitors",
];

export const remarksToRecyclableList = {
  "E-waste accepted: ICT equipment, Batteries and Lamps only": [
    ...ictEquipment,
    "Batteries",
    "Lamps",
  ],
  "E-waste accepted: ICT equipment and Batteries only": [
    ...ictEquipment,
    "Batteries",
  ],
  "E-waste accepted: Batteries and Lamps only": ["Batteries", "Lamps"],
  "E-waste accepted: Batteries only": ["Batteries"],
  "E-waste accepted: All regulated consumer products under First Schedule at https://go.gov.sg/prod-def-sl":
    [
      "Printers",
      "Computers, laptops",
      "Desktop monitors",
      "Mobile phones, tablets",
      "Modems, routers",
      "Network and set-top boxes",
      "Batteries",
      "Lamps",
    ],
  "E-waste accepted: Non-regulated products only; E.g. Small household appliances, gaming consoles, audio systems, power supplies":
    [
      "Small household appliances",
      "Gaming consoles",
      "Audio systems",
      "Power supplies",
    ],
};
const Home = () => {
  const [results, setResults] = useState([]);
  const [sideInfo, setSideInfo] = useState({});
  const [showSideInfo, setShowSideInfo] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  isSuccess && window.scrollTo(0, document.body.scrollHeight);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const action = (
    <div>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Recycle Go Where</title>
        <link rel="icon" href="/recycle-bin.png" />
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
        <LandingPage setResults={setResults} setIsSuccess={setIsSuccess} />
      </section>
      <section
        className="maps-section"
        style={{ position: "relative", display: isSuccess ? "block" : "none" }}
      >
        <div className="wrapper">
          <Sidebar
            list={results}
            setShowInfo={setSideInfo}
            setShowSideInfo={setShowSideInfo}
          />

          {showSideInfo && (
            <div
              className="side-info"
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

              <Typography
                sx={{ mb: 0.25, mt: 1, fontSize: 22 }}
                color="text.secondary"
              >
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
                      <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={sideInfo.website}
                      onClick={() => window.open(sideInfo.website, "_blank")}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
              <br></br>
              {remarksToRecyclableList[sideInfo.remarks]?.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  style={{ margin: "5px" }}
                  size="small"
                  // color="primary"
                />
              ))}
            </div>
          )}
        </div>

        <Maps
          coordinates={results}
          setSideInfo={setSideInfo}
          setShowSideInfo={setShowSideInfo}
        />
      </section>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied to clipboard"
        action={action}
      />
    </div>
  );
};
export default Home;
