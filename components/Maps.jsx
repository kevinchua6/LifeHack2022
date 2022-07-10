import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import react, { useEffect, useState } from "react";
export const remarksToColours = {
  "E-waste accepted: ICT equipment, Batteries and Lamps only": "dark-blue",
  "E-waste accepted: Batteries and Lamps only": "green",
  "E-waste accepted: Batteries only": "maroon",
  "E-waste accepted: ICT equipment and Batteries only": "grey",
  "E-waste accepted: All regulated consumer products under First Schedule at https://go.gov.sg/prod-def-sl":
    "red",
  "E-waste accepted: Non-regulated products only; E.g. Small household appliances, gaming consoles, audio systems, power supplies":
    "yellow",
};
export default function Maps({ coordinates, setSideInfo, setShowSideInfo }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Map
      coordinates={coordinates}
      setSideInfo={setSideInfo}
      setShowSideInfo={setShowSideInfo}
    />
  );
}

function Map({ coordinates, setSideInfo, setShowSideInfo }) {
  const center =
    coordinates.length > 0
      ? {
          lat: parseFloat(coordinates[0].properties.Lat),
          lng: parseFloat(coordinates[0].properties.Lon),
        }
      : { lat: 1.3521, lng: 103.8198 };

  const [centerState, setCenterState] = useState(center);

  useEffect(() => {
    setCenterState(center);
  }, [coordinates]);

  const zoom = coordinates && coordinates.length > 0 ? 15 : 12;

  return (
    <GoogleMap
      zoom={zoom}
      center={centerState}
      mapContainerClassName="map-container"
    >
      <Marker position={center} />
      {coordinates?.map((coordinate) => {
        return (
          <Marker
            icon={`/${remarksToColours[coordinate.properties.Remarks]}.png`}
            key={coordinate.properties.ID}
            onClick={() => {
              setSideInfo({
                servicePointName: coordinate.properties.Name,
                collectionType: coordinate.properties.Collection_Type,
                location: coordinate.properties.Location,
                postalCode: coordinate.properties.Postal_Code,
                remarks: coordinate.properties.Remarks,
                website: coordinate.properties.Website,
                directions: coordinate.properties.Directions,
              });
              setShowSideInfo(true);
            }}
            position={{
              lat: parseFloat(coordinate.properties.Lat),
              lng: parseFloat(coordinate.properties.Lon),
            }}
          />
        );
      })}
    </GoogleMap>
  );
}
