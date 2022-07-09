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

const types = [];

Object.values(remarksToRecyclableList)
  .flat()
  .forEach((item) => {
    if (types.indexOf(item) === -1) {
      types.push(item);
    }
  });

export default function handler(req, res) {
  res.status(200).json(types);
}
