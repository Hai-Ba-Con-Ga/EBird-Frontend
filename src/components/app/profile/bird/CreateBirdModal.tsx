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
const BirdImageSelectSection = styled.div``;
const CreateBirdModal = () => {
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

	return (
		<CreateFormWrapper
			onSubmit={handleSubmit((data) => {
				console.log(data);
				createNewBird(data as any);
			})}
		>
			<FormTitle>Create new bird</FormTitle>
			<BirdImageSelectSection>
				<input type="file" {...register("images")} />
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
					<input {...register("weight")} type="number" placeholder="Weight" />
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Age</label>
					<input {...register("age")} type="number" placeholder="Age" />
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
