import { IconClock, IconMapPin } from "@tabler/icons-react";
import React, { useEffect } from "react";
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
  useEffect(() => {
    console.log("Current room in request form", currentRoom);
  }, [currentRoom]);
  return (
    <CreateRequestFormWrapper onSubmit={handleSubmit(handleCreateRequest)}>
      <FormTitle>create request</FormTitle>=
      <FieldMaxLimit>
        <TextFieldBlock>
          <label htmlFor="">Location</label>
          <input
            type="text"
            {...register("location")}
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
      </FieldMaxLimit>
      <CreateButton type="submit">Create</CreateButton>
    </CreateRequestFormWrapper>
  );
};

export default CreateRequestForm;
