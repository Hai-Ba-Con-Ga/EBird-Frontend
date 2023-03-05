import React from "react";
import styled from "styled-components";
import { Bird } from "../../../utils/types";

type Props = {
	birds: Bird[];
};

const HighestBirds = (props: Props) => {
	console.log(props?.birds);

	return (
		<HighestBirdWrapper>
			<HighBirdCard variant="secondary" bird={props?.birds?.[1]}></HighBirdCard>
			<HighBirdCard variant="primary" bird={props?.birds?.[0]}></HighBirdCard>
			<HighBirdCard variant="secondary" bird={props?.birds?.[2]}></HighBirdCard>
		</HighestBirdWrapper>
	);
};
const HighestBirdWrapper = styled.div`
	display: flex;
	& #highest-card:nth-child(1) {
		position: relative;
		transform: translateX(30%);
		z-index: 1;
	}
	& #highest-card:nth-child(3) {
		position: relative;
		transform: translateX(-30%);
		z-index: 1;
	}
	& #highest-card:nth-child(2) {
		position: relative;
		z-index: 2;
	}
`;
const HighBirdCard = (props: {
	variant: "primary" | "secondary";
	bird: Bird;
}) => {
	return (
		<HighBirdCardWrapper id="highest-card">
			<BirdImage variant={props.variant}>
				<img
					src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQTJreXGWEmP7VoqZa1tb1QYZ9qxdpnOHY9vEYVemZ_t_aRszBNPwpAZ3NO0m4CQu-1nzAD0Z3fMVlpD10"
					alt=""
				/>
			</BirdImage>
			<BirdBrief>
				<BirdBriefText style={{ fontWeight: 600 }} varient="lg">
					{props?.bird?.name}
				</BirdBriefText>
				<BirdBriefText varient="md">{props?.bird?.elo}</BirdBriefText>
				<BirdBriefText varient="md">Ratio</BirdBriefText>
			</BirdBrief>
		</HighBirdCardWrapper>
	);
};

export const BirdBrief = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
export const BirdBriefText = styled.span`
	color: var(--dark-blue);
	font-size: ${(props: { varient: "sm" | "md" | "lg" }) => {
		switch (props.varient) {
			case "sm":
				return "var(--text-3xl)";
			case "md":
				return "var(--text-5xl)";
			case "lg":
				return "var(--text-7xl)";
		}
	}};
	text-align: center;
`;
export const HighBirdCardWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 1rem 3rem;
`;
export const BirdImage = styled.div`
	aspect-ratio: 1;
	/* border: 2px solid var(--dark-blue); */
	width: ${(props: { variant: "primary" | "secondary" }) => {
		return props?.variant == "primary" ? "30rem" : "25rem";
	}};
	box-shadow: 0px 0px 1px 2px var(--dark-blue)
		${(props: { variant: "primary" | "secondary" }) => {
			return props?.variant == "primary"
				? ", 0px 0px 3px 5px var(--color-coffee)"
				: "";
		}};
	border-radius: var(--roundedFull);
	overflow: hidden;
	img {
	}
`;
export default HighestBirds;
