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
import { MultipleTextField, TextFieldBlock } from "./TextField";
import Select from "../select/Select";
import { SelectOption } from "../select/Select.style";
import useApp from "../../app/common/useApp";
import useGoogleMap from "../map/useGoogleMap";

const CreateRequestForm = ({
  handleCreateRequest,
  showTitle,
  options: { mapSize, selectBird, isUpdate, updateCancelHandle },
}: {
  handleCreateRequest: (data: any) => void;
  showTitle?: boolean;
  options: {
    mapSize: "sm" | "md" | "lg" | "default";
    selectBird: boolean;
    isUpdate?: boolean;
    updateCancelHandle?: () => void;
  };
  initData?: {
    location: any;
  };
}) => {
  const { setLocation, GoogleMap, location } = useGoogleMap({
    onLocationChanged: (location) => {
      setValue("location", location);
    },
    mapSize,
  });
  const { handleSubmit, register, setValue } = useForm();
  const [time, setTime] = useState<string>(() => {
    setValue("time", "AM");
    return "Morning";
  });
  const { SelectBird, currentBird } = useApp({ useSelection: true });
  const inputRef = useRef<any>(null);
  useMap(inputRef, (place) => {
    setLocation({
      name: place.name,
      address: place.formatted_address,
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
    });
  });

  return (
    <CreateRequestFormWrapper
      style={isUpdate ? { padding: "0" } : {}}
      onSubmit={handleSubmit((data) =>
        handleCreateRequest({ ...data, currentBirdId: currentBird?.id })
      )}
    >
      {!isUpdate && <FormTitle>create request</FormTitle>}
      <FieldMaxLimit>
        <TextFieldBlock>
          <label htmlFor="">Location</label>
          <input
            ref={inputRef}
            type="text"
            // {...register("location")}
            value={location?.name}
            onChange={(e) =>
              setLocation({ ...location, placeName: e.target.value })
            }
            style={{
              color: "var(--dark-blue)",
            }}
            placeholder="Location"
          />
          {/* <IconMapPin/> */}
        </TextFieldBlock>
        {GoogleMap}
        <MultipleTextField>
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
        </MultipleTextField>

        {selectBird && SelectBird}
      </FieldMaxLimit>
      <Buttons>
        <CreateButton type="submit">
          {isUpdate ? "Update" : "Create"}
        </CreateButton>
        {isUpdate && (
          <CreateButton type="button" onClick={() => updateCancelHandle?.()}>
            Cancel
          </CreateButton>
        )}
      </Buttons>
    </CreateRequestFormWrapper>
  );
};
const FieldMaxLimit = styled.div`
  width: 40rem;
`;
const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export default CreateRequestForm;
