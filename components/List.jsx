import React from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

const Sidebar = ({ list, setShowInfo, setShowSideInfo }) => {
  console.log(list);
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }
  return (
    <div
      style={{
        borderRadius: "11px",
        background: "white",
      }}
    >
      <List className="list" sx={{ background: "background.paper" }}>
        {list?.map((x) => (
          <ListItem
            onClick={() => {
              setShowInfo({
                servicePointName: x.properties.Name,
                collectionType: x.properties.Collection_Type,
                location: x.properties.Location,
                postalCode: x.properties.Postal_Code,
                remarks: x.properties.Remarks,
                website: x.properties.Website,
                directions: x.properties.Directions,
              });
              setShowSideInfo(true);
            }}
            key={x.properties.ID}
            disablePadding
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: 1,

              height: "100px",
              boxShadow:
                "0 1px 2px rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15)",
            }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                paddingLeft: 1,
                height: "100%",
              }}
            >
              <ListItemText sx={{ flexGrow: 0 }}>
                <strong>{titleCase(x.properties.Name)}</strong>{" "}
                <span style={{ color: "green" }}>
                  ({Math.round(x.distance)}m away)
                </span>
              </ListItemText>
              <div style={{ display: "flex" }}>
                <RoomIcon fontSize="small" />
                {titleCase(x.properties.Location)}
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
