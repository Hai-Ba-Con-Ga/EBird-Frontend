import React, { useEffect, useState } from "react";
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
	const { setValue, handleSubmit } = useForm();
	const [birdTypes, setTypes] = useState<any[]>([]);
	const [currentTypeName, setTypeName] = useState<string>();
	useEffect(() => {
		BirdApi.getAllBirdType()
			.then((res) => res.data)
			.then((types) => setTypes(types));
	}, []);

	return (
		<CreateFormWrapper
			onSubmit={handleSubmit((data) => {
				console.log(data);
			})}
		>
			<FormTitle>Create new bird</FormTitle>
			<BirdImageSelectSection></BirdImageSelectSection>
			<MultipleTextField>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Name</label>
					<input type="text" placeholder="Bird name" />
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Type</label>
					<Select value={currentTypeName} placeholder="Bird Type">
						{birdTypes.map((birdType, i) => (
							<SelectOption
								key={birdType?.id}
								onClick={() => setValue("birdTypeId", birdType.id)}
							>
								{birdType?.typeName}
							</SelectOption>
						))}
					</Select>
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Color</label>
					<input type="text" placeholder="Color" />
				</TextFieldBlock>
			</MultipleTextField>
			<MultipleTextField>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Weight</label>
					<input type="text" placeholder="Bird name" />
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					<label htmlFor="">Bird Age</label>
					<input type="date" name="" id="" />
				</TextFieldBlock>
				<TextFieldBlock style={{ color: "var(--dark-blue)" }}>
					{/* TODO : Description use RichText */}
					<label htmlFor="">Description</label>
					<input type="text" placeholder="Color" />
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
