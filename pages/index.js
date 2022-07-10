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
import { remarksToRecyclableList } from "../data/remarks-to-recyclables";

const Home = () => {
  const [results, setResults] = useState([]);
  const [sideInfo, setSideInfo] = useState({});
  const [showSideInfo, setShowSideInfo] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

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
