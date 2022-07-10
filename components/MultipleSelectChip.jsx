import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const eWasteList = [
  "Printers",
  "Power banks",
  "Computers, laptops",
  "Mobile phones, tablets",
  "Modems, routers",
  "Network and set-top boxes",
  "Small TVs",
  "Desktop monitors",
  "Batteries",
  "Lamps",
  "Small household appliances",
  "Gaming consoles",
  "Audio systems",
  "Power supplies",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ eWaste, setEWaste, classes }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEWaste(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split("|") : value
    );
  };
  // TODO: do validation

  return (
    <FormControl fullWidth sx={{ marginTop: "16px", marginBottom: "16px" }}>
      <InputLabel id="demo-multiple-chip-label">E-Waste</InputLabel>
      <Select
        label="E-Waste"
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        color="success"
        multiple
        value={eWaste}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {eWasteList.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, eWaste, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
