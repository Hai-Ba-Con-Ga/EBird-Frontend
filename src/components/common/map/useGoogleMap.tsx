import { IconMapPin } from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import { CustomMap } from "./map.style";
import mapStyle from "../map/mapStyle.json";

const mapAutoStyle = {
  aspectRatio: "3/4",
  width: "100%",
  border: "2px solid var(--dark-blue)",
  borderRadius: "var(--roundedSmall)",
  overflow: "hidden",
};
const mapSmallStyle = {
  width: "400px",
  height: "350px",
  border: "2px solid var(--dark-blue)",
  borderRadius: "var(--roundedSmall)",
  overflow: "hidden",
};

type Props = {
  onLocationChanged: (location: any) => void;
  mapSize: "sm" | "md" | "lg" | "default";
};
const mockLocation = {
  name: "FPT University Phong",
  address:
    "Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000, Vietnam",
  latitude: 10.841254040490824,
  longitude: 106.80986154011964,
};
const useGoogleMap = ({ onLocationChanged, mapSize }: Props) => {
  const [location, setLocation] = useState<any>(() => mockLocation);
  const [center, setCenter] = useState({ lat: 10.8326, lng: 106.6581 });

  useEffect(() => {
    if (location) {
      setCenter({ lat: location?.latitude, lng: location?.longitude });
      //   setValue("location", location);
      onLocationChanged?.(location);
    }
  }, [location]);
  // *** hanler *//
  const handleMapClick = useCallback((event: any) => {
    const lat = event.lat;
    const lng = event.lng;
    const win = window as any;
    // Use Google Maps API to retrieve the place name
    const geocoder = new win.google.maps.Geocoder() as any;
    const placesService = new win.google.maps.places.PlacesService(
      document.createElement("div")
    );
    geocoder.geocode(
      { location: { lat, lng } },
      (results: any, status: any) => {
        if (status === "OK") {
          placesService.nearbySearch(
            {
              location: { lat, lng },
              rankBy: win.google.maps.places.RankBy.DISTANCE,
              type: ["establishment"],
            },
            (place: any, status: any) => {
              if (status === "OK") {
                const placeName = place[0].name;
                setLocation({
                  latitude: lat,
                  longitude: lng,
                  placeName,
                  address: place[0].formatted_address,
                });
              }
            }
          );
        }
      }
    );
  }, []);
  return {
    GoogleMap: (
      <div style={mapSize == "default" ? mapAutoStyle : mapSmallStyle}>
        <CustomMap
          bootstrapURLKeys={{
            key: "AIzaSyCUQmRbZTCqXZnjOPpRws3_I_oLlt4GKhc",
          }}
          center={center}
          defaultZoom={15}
          options={{
            styles: mapStyle,
            zoomControl: false,
            clickableIcons: false,
            mapTypeControl: false,
            streetViewControl: false,
          }}
          onClick={handleMapClick}
        >
          {location && (
            <Marker
              lat={location.latitude}
              lng={location.longitude}
              placeName={location.name}
            />
          )}
        </CustomMap>
      </div>
    ),
    setLocation,
    location,
  };
};
export const Marker = ({ placeName }: any) => (
  <div>
    <div>
      <IconMapPin color="var(--dangerous)" style={{ transform: "scale:1.4" }} />
    </div>
  </div>
);
export default useGoogleMap;
