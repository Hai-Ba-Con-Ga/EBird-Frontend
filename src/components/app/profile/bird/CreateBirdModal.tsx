import { Typography } from "@mui/material";
import { IconUpload } from "@tabler/icons-react";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ButtonCommon } from "../../../common/button/Button.style";

import {
	MultipleTextField,
	TextFieldBlock,
} from "../../../common/form/TextField";
import Select from "../../../common/select/Select";
import { SelectOption } from "../../../common/select/Select.style";
import { BirdApi } from "./bird.api";
import useBird from "./useBird";

const CreateFormWrapper = styled.form`
	width: 100%;
	height: 100%;
	padding: 2rem 5rem;
`;

const FormTitle = styled.h2`
	font-size: var(--text-7xl);
	color: var(--dark-blue);
	font-weight: 600;
	display: inline-block;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	text-transform: uppercase;
`;
const BirdImageSelectSection = styled.div`
	/* height: 15rem; */
	display: flex;
	justify-content: center;
	align-items: center;
	label {
		border: 2px solid var(--dark-blue);
		border-radius: var(--roundedMedium);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30rem;
		aspect-ratio: 4/3;
		height: 100%;
		transition: all 0.25s linear;
	}
`;
const CreateBirdModal = ({ reloadList }: { reloadList?: () => void }) => {
	const { setValue, handleSubmit, register } = useForm();
	const [birdTypes, setTypes] = useState<any[]>([]);
	const [currentTypeName, setTypeName] = useState<string>("");

	const { createNewBird } = useBird();

	useEffect(() => {
		BirdApi.getAllBirdType()
			.then((res) => res.data)
			.then((types) => setTypes(types));
	}, []);
	useEffect(() => {
		console.log(currentTypeName);
	}, [currentTypeName]);
	const [previewUrl, setPreviewUrl] = useState<string>();
	return (
		<CreateFormWrapper
			onSubmit={handleSubmit((data) => {
				console.log(data);
				createNewBird(data as any, reloadList);
			})}
		>
			<FormTitle>Create new bird</FormTitle>
			<BirdImageSelectSection>
				<label htmlFor="bird-img-upload" style={{ cursor: "pointer" }}>
					{previewUrl ? (
						<img src={previewUrl} alt="" />
					) : (
						<IconUpload color="var(--dark-blue)" />
					)}
					<input
						type="file"
						id="bird-img-upload"
						style={{ display: "none" }}
						{...register("images", {
							onChange: (event) => {
								const reader = new FileReader();
								console.log(event);

								reader.onload = (event) => {
									setPreviewUrl(event?.target?.result as string);
								};

								reader.readAsDataURL(event.target.files[0]);
							},
						})}
					/>
				</label>
			</BirdImageSelectSection>
			<MultipleTextField>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Name</label>
					<input {...register("name")} type="text" placeholder="Bird name" />
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Type</label>
					<Select value={currentTypeName} placeholder="Bird Type">
						{birdTypes.map((birdType, i) => (
							<SelectOption
								key={birdType?.id}
								onClick={() => {
									setValue("birdTypeId", birdType.id);
									setTypeName(birdType?.typeName);
								}}
							>
								{birdType?.typeName}
							</SelectOption>
						))}
					</Select>
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Color</label>
					<input {...register("color")} type="text" placeholder="Color" />
				</TextFieldBlock>
			</MultipleTextField>
			<MultipleTextField>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Weight</label>
					<input
						{...register("weight", { min: 0 })}
						min={0}
						type="number"
						step={0.1}
						placeholder="Weight"
					/>
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Age</label>
					<input
						{...register("age", { min: 0 })}
						type="number"
						min={0}
						placeholder="Age"
					/>
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					{/* TODO : Description use RichText */}
					<label htmlFor="">Description</label>
					<input
						{...register("description")}
						type="text"
						placeholder="Description"
					/>
				</TextFieldBlock>
			</MultipleTextField>
			<ButtonCommon
				type="submit"
				style={{
					margin: "0 auto",
					display: "block",
					backgroundColor: "var(--dark-blue)",
					color: "var(--white)",
					fontSize: "var(--text-3xl)",
				}}
			>
				Create bird
			</ButtonCommon>
		</CreateFormWrapper>
	);
};

export default CreateBirdModal;
