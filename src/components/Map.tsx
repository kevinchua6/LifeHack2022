import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import React from "react";

export default function MapComp() {
  console.log(process.env);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAqjMZQonK0_hx3Ew4cyz_yN8XBtct4V9I" || "",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
