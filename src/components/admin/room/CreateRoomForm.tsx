import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { RoomApi } from "../../app/room/room.api";
import { TextField } from "../../common/form/TextField";
import useModal from "../../common/modal/useModal";

const CreateRoomForm = ({
	onCreateSuccessCallback,
}: {
	onCreateSuccessCallback?: () => void;
}) => {
	const { register, handleSubmit } = useForm();
	const { closeModal } = useModal();

	return (
		<FormWrapper
			onSubmit={handleSubmit((data) => {
				console.log(data);

				RoomApi.createRoom({ ...data, status: "Active" } as any).then(() => {
					onCreateSuccessCallback?.();
					closeModal();
				});
			})}
		>
			<FormTitle>Create Room</FormTitle>
			<TextField isValid>
				<input type="text" {...register("name")} placeholder=" " />
				<label htmlFor="">Room name</label>
			</TextField>
			<TextField isValid>
				<input type="text" {...register("city")} placeholder=" " />
				<label htmlFor="">Room City</label>
			</TextField>
			<Button type="submit" color="secondary" variant="contained">
				Save
			</Button>
		</FormWrapper>
	);
};

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 60%;
	margin: 0 auto;
`;
const FormTitle = styled.h1`
	font-size: var(--text-5xl);
	font-weight: 600;
	color: var(--dark-blue);
`;
export default CreateRoomForm;
