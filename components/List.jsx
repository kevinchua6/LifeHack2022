import React from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

const Sidebar = ({ list }) => {
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
            key={x.properties.ID}
            disablePadding
            sx={{ height: "100px" }}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <ListItemText>
                <strong>{titleCase(x.properties.Name)}</strong>{" "}
                <span style={{ color: "green" }}>
                  {Math.round(x.distance)}m away
                </span>
              </ListItemText>
              <div>
                <RoomIcon />
                <Link href={x.properties.Directions}>
                  {titleCase(x.properties.Location)}
                </Link>
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
