import sites from "../../data/sites.json";

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

// modified from: http://www.movable-type.co.uk/scripts/latlong.html
const R = 6371e3; // metres
function getDistance(lat1, lon1, lat2, lon2) {
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres
}

const canRecycle = (types) => (site) => {
  const recyclableList = remarksToRecyclableList[site.properties.Remarks];
  return types.every((type) => recyclableList.includes(type));
};

export default async (req, res) => {
  const { address, types, limit = 10 } = req.query;

  if (!address) {
    res.status(200).json({
      error: "Please provide an address.",
    });
  }

  if (!types) {
    res.status(200).json({
      error: "Please provide a list of comma-separated e-waste types.",
    });
  }

  const data = await fetch(
    "https://maps.googleapis.com/maps/api/geocode/json?" +
      new URLSearchParams({
        address: `singapore ${address}`,
        sensor: "true",
        key: process.env.NEXT_PUBLIC_KEY,
      })
  ).then((response) => response.json());

  if (data.status === "ZERO_RESULTS") {
    res.status(200).json([]);
  }

  const { lat, lng } = data.results[0].geometry.location;

  const filteredSites = sites
    .filter(canRecycle(types.split("|")))
    .map((site) => {
      const [siteLng, siteLat] = site.geometry.coordinates;
      return {
        ...site,
        distance: getDistance(siteLat, siteLng, lat, lng),
      };
    });
  filteredSites.sort((a, b) => a.distance - b.distance);

  res.status(200).json(filteredSites.slice(0, limit));
};
