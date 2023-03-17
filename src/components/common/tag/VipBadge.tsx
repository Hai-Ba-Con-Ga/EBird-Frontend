import { IconCrown } from "@tabler/icons-react";
import React from "react";
import styled from "styled-components";

const VipBadge = () => {
	return (
		<BadgeWrapper>
			<IconCrown />
			<span>V.I.P</span>
		</BadgeWrapper>
	);
};

export default VipBadge;

const BadgeWrapper = styled.span`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	border-radius: var(--roundedSmall);
	top: 0;
	left: 0;
	font-size: var(--text-large);
	font-weight: 600;
	height: fit-content;
	padding: 0.75rem 2rem;
	background-color: var(--pink-neon);
	color: var(--white);
`;
