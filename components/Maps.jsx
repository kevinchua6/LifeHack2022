import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import react from "react";

export default function Maps({ coordinates, setSideInfo }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map coordinates={coordinates} setSideInfo={setSideInfo} />;
}

function Map({ coordinates, setSideInfo }) {
  const center = { lat: 44, lng: -80 };

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
      {coordinates?.map((coordinate, index) => {
        const [lat, lng] = coordinate.geometry.coordinates;
        setSideInfo({
          servicePointName: coordinate.properties.Name,
          collectionType: coordinate.properties.Collection_Type,
          location: coordinate.properties.Location,
          postalCode: coordinate.properties.Postal_Code,
          remarks: coordinate.properties.Remarks,
          website: coordinate.properties.Website,
        });
        return (
          <Marker
            // icon={hello.svg}
            key={index}
            position={{ lat: lat, lng: lng }}
          />
        );
      })}
    </GoogleMap>
  );
}
