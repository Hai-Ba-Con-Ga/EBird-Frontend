import React, { useEffect } from "react";
import { IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { CustomMap } from "../map/map.style";
import mapStyle from "../map/mapStyle.json";
import useMap from "../map/useMapAutoComplete";
import {
  CreateButton,
  CreateRequestFormWrapper,
  FormTitle,
} from "./createRequest.style";
import { TextFieldBlock } from "./TextField";
import Select from "../select/Select";
import { SelectOption } from "../select/Select.style";
import useApp from "../../app/common/useApp";

const Marker = ({ placeName }: any) => (
  <div>
    <div>
      <IconMapPin color="var(--dangerous)" style={{ transform: "scale:1.4" }} />
    </div>
  </div>
);
const mockLocation = {
  name : "FPT University",
  address : "Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000, Vietnam",
  latitude : 10.841128,
  longitude : 106.809883,
}
const CreateRequestForm = ({
  handleCreateRequest,
}: {
  handleCreateRequest: (data: any) => void;
}) => {
  const [location, setLocation] = useState<any>(()=>mockLocation);
  const [center, setCenter] = useState({ lat: 10.8326, lng: 106.6581 });
  const { handleSubmit, register, setValue } = useForm();
  const [time, setTime] = useState<string>(() => {
    setValue("time", "AM");
    return "Morning";
  });
  const  {SelectBird,currentBird} = useApp({useSelection:true});
  const inputRef = useRef<any>(null);
  useMap(inputRef, (place) => {
    setLocation({
      name: place.name,
      address: place.formatted_address,
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
    });
  });
  useEffect(() => {
    if (location) {
      setCenter({ lat: location?.latitude, lng: location?.longitude });
      setValue("location", location);
    }
  }, [location]);

  // *** hanler *//
  const handleMapClick = (event: any) => {
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
                  latitude:lat,
                  longitude : lng,
                  placeName,
                  address: place[0].formatted_address,
                });
              }
            }
          );
        }
      }
    );
  };
  return (
    <CreateRequestFormWrapper
      onSubmit={handleSubmit((data) =>
        handleCreateRequest({ ...data, location,currentBirdId: currentBird?.id })
      )}
    >
      <FormTitle>create request</FormTitle>=
      <FieldMaxLimit>
        <TextFieldBlock>
          <label htmlFor="">Location</label>
          <input
            ref={inputRef}
            type="text"
            // {...register("location")}
            value={location?.placeName}
            onChange={(e)=>setLocation({...location,placeName : e.target.value})}
            style={{
              color: "var(--dark-blue)",
            }}
            placeholder="Location"
          />
          {/* <IconMapPin/> */}
        </TextFieldBlock>
        <div
          style={{
            aspectRatio: "3/4",
            width: "100%",
            border: "2px solid var(--dark-blue)",
            borderRadius: "var(--roundedSmall)",
            overflow: "hidden",
          }}
        >
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
        <TextFieldBlock>
          <label htmlFor="">Date</label>
          <input
            {...register("date")}
            type="date"
            style={{
              color: "var(--dark-blue)",
            }}
            placeholder="Date"
          />
        </TextFieldBlock>
        <TextFieldBlock>
          <label htmlFor="">Time</label>
          <Select value={time}>
            <SelectOption
              onClick={() => {
                setValue("time", "AM");
                setTime("Morning");
              }}
            >
              Morning
            </SelectOption>
            <SelectOption
              onClick={() => {
                setValue("time", "PM");
                setTime("Noon");
              }}
            >
              Noon
            </SelectOption>
          </Select>
          {/* <IconClock/> */}
        </TextFieldBlock>
        <TextFieldBlock>
          <label htmlFor="">Select your bird</label>

        {SelectBird}
        </TextFieldBlock>
      </FieldMaxLimit>
      <CreateButton type="submit">Create</CreateButton>
    </CreateRequestFormWrapper>
  );
};
const FieldMaxLimit = styled.div`
  width: 40rem;
`;

export default CreateRequestForm;
