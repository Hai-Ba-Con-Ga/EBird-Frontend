import styled from "styled-components";
import ImageComponent from "../../common/image/ImageComponent";

export const RankSectionWrapper = styled.section`
	width: 100%;
	max-height: 100vh;
	background-color: var(--white);
	padding-bottom: 5rem;
	scroll-snap-align: start;
`;

export const SectionTransitionGradient = styled.div`
	width: 100%;
	height: 10rem;
	background: linear-gradient(rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0));
`;

export const RankingHeading = styled.h1`
	text-transform: uppercase;
	font-weight: 600;
	color: var(--black);
	font-size: var(--text-7xl);
	text-align: center;
`;

export const RankingTable = styled.table`
	margin: 0 auto;
	& tr th {
		font-weight: 600;
		color: var(--black);
		font-size: var(--text-3xl);
		text-transform: uppercase;
		text-align: center;
	}
	& tr td {
		font-size: var(--text-xl);
		color: var(--black);
		border-bottom: solid 2px var(--gray);
		&:first-child {
			font-weight: 600;
		}
	}
	& tr th,
	& tr td {
		padding: 0.5rem 2rem;
		text-align: center;
	}
`;
export const RankingChampImage = styled(ImageComponent)`
	width: 5rem;
	aspect-ratio: 1;
	height: 5rem;
	overflow: hidden;
`;
