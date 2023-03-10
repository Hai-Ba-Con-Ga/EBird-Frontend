import styled from "styled-components";

export const RankingWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: var(--page-padding);
	/* max-width: 155rem; */
	/* background-color: red; */
`;
export const RankingMainContent = styled.div`
	display: flex;
	gap: 2rem;
	height: 100%;
`;
export const RankingBoard = styled.div`
	flex: 0 0 75%;
	height: 100%;
	border: 3px solid var(--dark-green);
	overflow-y: auto;
	border-radius: var(--roundedSmall);
	h1 {
		text-transform: uppercase;
		color: var(--dark-green);
		margin: 1rem auto;
		text-align: center;
		font-size: var(--text-7xl);
	}
`;
export const MyRanking = styled.div`
	flex: 0 0 25%;
	height: 100%;
	border: 3px solid var(--dark-green);
	overflow-y: auto;
	border-radius: var(--roundedSmall);
	h1 {
		text-transform: uppercase;
		color: var(--dark-green);
		margin: 1rem auto;
		text-align: center;
		font-size: var(--text-7xl);
	}
`;
export const HeaderRanking = styled.div`
	height: 10%;
	/* border: 3px solid var(--dark-green); */
	overflow-y: auto;
	border-radius: var(--roundedSmall);
	display: flex;
	h1 {
		flex: 0 0 20%;
		text-transform: uppercase;
		color: var(--dark-green);
		margin: 1rem auto;
		text-align: center;
		font-size: var(--text-7xl);
	}
	input {
		flex: 0 0 20%;
		text-transform: uppercase;
		color: var(--dark-green);
		margin: 1rem auto;
		text-align: center;
		font-size: var(--text-7xl);
		border: 3px solid var(--dark-green);
	}
`;

export const MatchTab = styled.span`
	font-size: var(--text-5xl);
	color: var(--dark-green);
	cursor: pointer;
	font-weight: 600;
	/* opacity: 0.6; */
	opacity: ${({ active }: { active: boolean }) => {
		return active ? "0.6;" : "1;";
	}};
	transition: all 0.25s linear;
`;

export const MyRankCard = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const MyBirdAvaRank = styled.div`
	width: 70%;
	aspect-ratio: 1;
	overflow: hidden;
	border-radius: var(--roundedFull);
`;
