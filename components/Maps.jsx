import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import react from "react";
export default function Maps({ coordinates }) {
  console.log(coordinates);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map coordinates={coordinates} />;
}

function Map({ coordinates }) {
  const center =
    coordinates.length > 0
      ? {
          lat: parseFloat(coordinates[0].properties.Lat),
          lng: parseFloat(coordinates[0].properties.Lon),
        }
      : { lat: 1.3521, lng: 103.8198 };
  console.log(center);
  const zoom = coordinates.length > 0 ? 15 : 12;

  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker position={center} />
      {coordinates?.map((coordinate) => {
        console.log(coordinate);
        return (
          <Marker
            // icon={hello.svg}
            key={coordinate.properties.ID}
            onClick={() => console.log("clicked")}
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
