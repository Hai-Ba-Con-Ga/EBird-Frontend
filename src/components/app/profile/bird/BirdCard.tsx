import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useProfile from "../useProfile";
import { Bird } from "../../../../utils/types";
import useModal from "../../../common/modal/useModal";
import { BirdApi } from "./bird.api";
import BirdDetailModal from "./BirdDetailModal";

type Props = {
	bird: Bird;
};
export const BirdCardWrapper = styled.div`
	width: 27.5rem;
	height: 37.5rem;
	padding: 0.5rem;
	/* background-color: green; */
	background: linear-gradient(135deg, var(--dark-blue), var(--dark-green));
	border-radius: var(--roundedMedium);
	cursor: pointer;
	position: relative;
`;
export const BirdImage = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: var(--roundedMedium);
`;
export const BirdCardTitle = styled.div`
	position: absolute;
	height: fit-content;
	padding: 2rem 1.5rem;
	background-color: rgba(0, 0, 0, 0.8);
	color: var(--white);
	font-size: var(--text-3xl);
	bottom: 0;
	left: 0;
	right: 0;
	border-radius: 0 0 var(--roundedMedium) var(--roundedMedium);
`;
export const BirdInformationPrompt = styled.div`
	position: absolute;
	padding: 2rem;
	width: 30rem;
	height: 25rem;
	background-color: var(--dark-green);
	z-index: 3;
	bottom: 50%;
	${({ position }: { position: "left" | "right" }) =>
		position === "left"
			? "left: 0;transform: translate(-101%, 50%) ;"
			: "right: 0; transform: translate( 101%, 50%) ;"}
	box-shadow: 1px 1px 5px -3px var(--dark-green);
	&::after {
		content: "";
		width: 20px;
		aspect-ratio: 1;
		background-color: var(--dark-green);
		position: absolute;
		top: 50%;
		${({ position }: { position: "left" | "right" }) =>
			position == "left"
				? "left: 0;transform: translate(-50%, -50%) rotate(45deg);"
				: "right: 0;transform: translate(50%, -50%) rotate(45deg);"}
	}
	color: var(--gold-secondary);
	h3 {
		margin: 1.5rem 0;
		font-size: var(--text-5xl);
		padding-bottom: 0.75rem;
		border-bottom: var(--gold-primary) 1px solid;
	}
	span {
		display: inline-block;
		font-size: var(--text-2xl);
		color: var(--white);
		label {
			color: var(--gold-secondary);
			min-width: 10rem;
			display: inline-block;
			font-weight: 600;
		}
		margin: 0.5rem 0;
	}
`;
const BirdCard = ({ bird }: Props) => {
	const { openModal } = useModal();
	const [pop, setPop] = useState<boolean>(false);
	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, []);
	const handleMouseOver = () => {
		timerRef.current = window.setTimeout(() => {
			setPop(true);
		}, 500);
	};

	const handleMouseOut = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			timerRef.current = null;
		}
		setPop(false);
	};

	const handleBirdCardClick = useCallback(() => {
		openModal({
			payload: null,
			closable: true,
			component: <BirdDetailModal birdId={bird?.id}></BirdDetailModal>,
		});
	}, []);
	return (
		<BirdCardWrapper
			onClick={() => handleBirdCardClick()}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<BirdImage>
				<img
					src="https://www.theanimalfacts.com/wp-content/uploads/2021/08/Red-Whiskered-Bulbul-2.jpg"
					alt=""
				/>
			</BirdImage>
			{
				<BirdInformationPrompt position="left">
					<h3>Bird information</h3>
					<span>
						<label htmlFor="">Bird name</label>
						{bird?.name}
					</span>
					<span>
						<label htmlFor="">Bird type</label>Chao mao
					</span>
					<span>
						<label htmlFor="">Elo</label>
						{bird?.elo}
					</span>
					<span>
						<label htmlFor="">Winrate</label>
						{"bird?.ratio.win"}
					</span>
				</BirdInformationPrompt>
			}
			{/* <BirdCardTitle>Bird Name</BirdCardTitle> */}
		</BirdCardWrapper>
	);
};

export default BirdCard;
