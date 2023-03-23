import styled from "styled-components";
import { ButtonCommon } from "../../common/button/Button.style";
export const LobbyWrapper = styled.div`
	width: 100%;
	height: 100%;
	/* background-color: #34453d; */
	opacity: 0.9;
	display: flex;
	flex-direction: column;
`;
export const BackdropVideo = styled.video`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	z-index: -2;
	width: 100%;
	height: 100%;
`;
export const LobbyBackground = styled.div`
	mix-blend-mode: overlay;
	width: 100%;
	height: 100%;
	background-color: #34453d;
	opacity: 0.97;
	position: absolute;
	left: 0;
	top: 0;
	z-index: -1;
	backdrop-filter: blur(16.5px);
	-webkit-backdrop-filter: blur(16.5px);
`;
export const PageTitle = styled.div`
	font-size: var(--text-7xl);
	color: var(--gold-secondary);
	text-transform: uppercase;
	margin-top: 0;
	margin-bottom: 1rem;
	display: flex;
	justify-content: space-between;
	h3 {
		margin: 1rem 0;
	}
	button {
		scale: 1.2;
		&:hover {
			animation: rotate 2s infinite forwards linear;
		}
	}
	@keyframes rotate {
		0% {
		}
		100% {
			transform: rotateZ(360deg);
		}
	}
`;
export const PageMain = styled.div`
	height: 80%;
	width: 100%;
	padding: var(--page-padding);
	position: relative;
	z-index: 1;
	color: red;
	flex: 0 0 80%;
	overflow-y: auto;
`;
export const RequestGrid = styled.div`
	--column: 4;
	display: grid;
	grid-template-columns: repeat(var(--column), 1fr);
	grid-gap: 10px;
	overflow-y: auto;
	overflow-x: hidden;
	@media screen and (max-width: 1738.98px) {
		--column: 3;
	}
	@media screen and (max-width: 1279.98px) {
		--column: 2;
		place-items: center;
	}
	@media screen and (max-width: 730.98px) {
		--column: 1;
		place-items: center;
	}
`;
// Request Card

export const ActionArea = styled.div`
	/* margin-top:2rem; */
	width: 100%;
	height: 20%;
	border-top: 3px groove var(--gold-primary);
	padding: 2rem;
	flex: 0 0 20%;
`;
export const ActionButton = styled(ButtonCommon)`
	border-radius: var(--roundedSmall);
	background-color: var(--gold-primary);
	color: var(--white);
	font-size: var(--text-3xl);
	padding: 1.75rem 4rem;
`;
export const RequestActions = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`;
export const RequestCardWrapper = styled.div`
	min-width: 40rem;
	max-width: 45rem;

	height: fit-content;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	border: 2px solid var(--color-coffee);
	border-radius: var(--roundedSmall);
`;
export const RequestCardInfomationField = styled.div`
	margin-bottom: 1rem;
	display: flex;
	gap: 0.75rem;
	font-size: var(--text-2xl);
	color: var(--gold-secondary);
	align-items: center;
	/* justify-content: center; */
	span {
		font-weight: 600;
		line-height: 1;
	}
`;

export const RequestBirdWrapper = styled.div`
	display: flex;
	flex: 0 0 50%;
	gap: 1rem;
	${({ isOwner }: { isOwner: boolean }) => {
		return isOwner ? "flex-direction: row-reverse;" : "flex-direction: row;";
	}}
	align-items: center;
`;
export const BirdImage = styled.div`
	flex: 0 0 7rem;
	aspect-ratio: 1;
	border-radius: var(--roundedFull);
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const BirdInformations = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${({ isOwner }: { isOwner: boolean }) => {
		return isOwner ? "flex-end" : "flex-start";
	}};
	font-size: var(--text-small);
	color: var(--color-coffee);
	font-weight: 600;
	h1 {
		display: flex;
		gap: 0.25rem;
		align-items: center;
		span {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1; /* number of lines to show */
			line-clamp: 1;
			-webkit-box-orient: vertical;
		}
	}
`;
export const RequestBirdContainer = styled.div`
	display: flex;
	font-size: var(--text-medium);
	gap: 1rem;
	justify-content: center;
`;
export const JoinButton = styled(ButtonCommon)`
	background-color: var(
		${({ isOwner }: { isOwner: boolean }) =>
			isOwner ? "--green" : "--warning"}
	);
	color: var(--white);
	font-weight: 600;
	padding: 1.5rem 0;
	border-radius: var(--roundedSmall);
	font-size: var(--text-2xl);
	&:disabled {
		/* opacity: 0.8; */
		background-color: var(--gray);
	}
`;
export const QuickMatchSelectWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	padding: 2rem 1.5rem;
	overflow-y: auto;
`;
export const QuickMatchSelectHeader = styled.h1`
	font-size: var(--text-5xl);
	color: var(--dark-blue);
	font-weight: 600;
`;
export const ListSelections = styled.div`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	/* align-items: center; */
	overflow-y: auto;
`;
