import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import react from "react";
export default function Maps({ coordinates }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map coordinates={coordinates} />;
}

function Map({ coordinates }) {
  const center = { lat: 44, lng: -80 };

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
      {coordinates?.map((coordinate, index) => {
        return (
          <Marker
            // icon={hello.svg}
            key={index}
            position={{ lat: coordinate.lat, lng: coordinate.lng }}
          />
        );
      })}
    </GoogleMap>
  );
}
