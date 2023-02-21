import { IconClock, IconMapPin } from "@tabler/icons-react";
import React, { useEffect,useState,useRef } from "react";
import styled from "styled-components";
import {
  CreateButton,
  CreateRequestFormWrapper,
  FormTitle,
} from "./createRequest.style";
import { TextField, TextFieldBlock } from "./TextField";
import { useForm } from "react-hook-form";
import useModal from "../modal/useModal";
import useApp from "../../app/common/useApp";
import useAuth from "../../auth/useAuth";
import { toast } from "react-toastify";
import { MatchApi } from "../../app/lobby/match.api";
import GoogleMapReact,{} from 'google-map-react';
const mapStyle = [
  {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#e0efef"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "hue": "#1900ff"
          },
          {
              "color": "#c0e8e8"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 100
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "lightness": 700
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#7dcdcd"
          }
      ]
  }
];
const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  
  const handleMapClick = (event:any) => {
    const lat = event.lat;
    const lng = event.lng;
    const win = window as any
    // Use Google Maps API to retrieve the place name
    const geocoder = new win.google.maps.Geocoder() as any;
    geocoder.geocode({ location: { lat, lng } }, (results:any, status:any) => {
      if (status === 'OK') {
        const placeName = results[0].formatted_address;
        setSelectedLocation({ lat, lng, placeName });
      }
    });
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDDs0_xinQtlrLDxpY6VSLfThWELV7BmWY' }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultZoom={12}
        options={{styles:mapStyle}}
        onClick={handleMapClick}
      >
        {selectedLocation && (
          <Marker
            lat={selectedLocation.lat}
            lng={selectedLocation.lng}
            placeName={selectedLocation.placeName}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ placeName }:any) => (
  <div>
    <div style={{ backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
      {placeName}
    </div>
    <img src="/marker.svg" alt="Map Marker" />
  </div>
);
const FieldMaxLimit = styled.div`
  width: 30rem;
`;

const CreateRequestForm = ({
  handleCreateRequest,
}: {
  handleCreateRequest: (data: any) => void;
}) => {
  const { handleSubmit, register } = useForm();
  const { closeModal } = useModal();
  const { currentRoom, currentBird } = useApp();
  const { auth } = useAuth();
  const inputRef = useRef<any>(null);
  const [location,setLocation] = useState<any>();
  useEffect(() => {
    const wd = window as any;
    const autocomplete = new wd.google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode'],
    });
  
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log("No details available for input: '" + place.name + "'");
        return;
      }
  
      // Update state with selected location
      setLocation({
        name: place.name,
        address: place.formatted_address,
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng(),
      });
    });
  }, []);
  return (
    <CreateRequestFormWrapper onSubmit={handleSubmit((data)=>handleCreateRequest({...data,location}))}>
      <FormTitle>create request</FormTitle>=
      <FieldMaxLimit>
        <TextFieldBlock>
          <label htmlFor="" >Location</label>
          <input
            ref={inputRef}
            type="text"
            // {...register("location")}
            style={{
              color: "var(--dark-blue)",
            }}
            placeholder="Location"
          />
          {/* <IconMapPin/> */}
        </TextFieldBlock>
        <TextFieldBlock>
          <label htmlFor="">Time</label>
          <input
            {...register("time")}
            type="datetime-local"
            style={{
              color: "var(--dark-blue)",
            }}
            placeholder="Time"
          />
          {/* <IconClock/> */}
        </TextFieldBlock>
        <Map/>
      </FieldMaxLimit>
      <CreateButton type="submit">Create</CreateButton>
    </CreateRequestFormWrapper>
  );
};

export default CreateRequestForm;
