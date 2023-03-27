import styled from "styled-components";
import { MatchStatus } from "../../../utils/types";
import {
	BirdImage,
	BirdInformations,
	RequestCardInfomationField,
} from "../lobby/lobby.style";

export const MatchPageWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 1.5rem 2rem;
	display: flex;
	gap: 2rem;
`;
export const AllMatchWrapper = styled.div`
	flex: 0 0 65%;
	border: 2px solid var(--purple-primary);
	border-radius: var(--roundedSmall);
	overflow-y: auto;
	overflow-x: hidden;
`;
export const MyMatchWrapper = styled.div`
	flex: 0 0 34%;
	border: 2px solid var(--purple-primary);
	border-radius: var(--roundedSmall);
	margin-right: 2rem;
	padding: 0 2rem;
	position: relative;
`;

export const AllMatchTabSide = styled.div`
	display: flex;
	gap: 2rem;
	padding: 3rem 2rem;
`;
export const MatchTab = styled.span`
	font-size: var(--text-5xl);
	color: var(--dark-green);
	cursor: pointer;
	font-weight: 600;
	/* opacity: 0.6; */
	opacity: ${({ active }: { active: boolean }) => {
		return active ? "1;" : "0.8;";
	}};
	border-bottom: 0px solid var(--dark-blue);

	/* ${({ active }: { active: boolean }) => {
		return active ? "border-bottom-width: 2px" : "0px";
	}};
	 */
	transition: all 0.25s linear;
`;
export const MatchesLayout = styled.div`
	height: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
	/* grid-auto-flow: column; */
	padding: 2rem;
`;
export const MyMatchTitle = styled.span`
	font-size: var(--text-5xl);
	color: var(--dark-green);
	text-transform: uppercase;
	font-weight: 600;
	margin: 3rem 0;
	display: inline-block;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
`;

export const MatchCardWrapper = styled.div`
	cursor: pointer;

	min-width: 35rem;
	/* max-width: 45rem; */
	width: 100%;
	height: fit-content;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	border: 2px solid var(--dark-blue);
	border-radius: var(--roundedSmall);
`;
export const MatchInformationSection = styled.div`
	display: flex;
	max-width: 100%;
	justify-content: space-between;
`;

export const MatchInformationField = styled(RequestCardInfomationField)`
	color: var(--dark-green);
	word-wrap: normal;
	/* display: inline-block; */
	/* white-space: nowrap; */
	overflow: hidden;
	text-overflow: ellipsis;
	/* max-width: 50%; */
`;
interface MatchStatusProps {
	status: MatchStatus;
}
export const MatchStatusSpan = styled.span`
	padding: 1rem 3rem;
	line-height: 1.5;
	height: fit-content;
	color: var(--white);
	font-weight: 600;
	border-radius: var(--roundedMedium);
	font-size: var(--text-2xl);
	background-color: ${(props: MatchStatusProps) => {
		switch (props.status) {
			case MatchStatus.During:
				return "var(--warning);";
			case MatchStatus.Conflict:
				return "var(--dangerous);";
			case MatchStatus.Cancelled:
				return "var(--grey);";
			case MatchStatus.Completed:
				return "var(--active);";
			default:
				return "var(--active);";
		}
	}};
`;

export const BirdMatchInformation = styled(BirdInformations)`
	color: var(--dark-green);
`;
export const BirdMatchImage = styled(BirdImage)`
	/* width: 10rem; */
	aspect-ratio: 1;
`;

export const BirdResultWrapper = styled.div`
	flex: 0 0 50%;
`;

export const BirdResult = styled.span`
	margin-top: 2rem;
	font-weight: 600;
	font-size: var(--text-4xl);
	color: var(
		${({ result }: { result: boolean }) =>
			result ? "--active" : "--dangerous"}
	);
	display: inline-block;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
`;

export const VersusDivider = styled.span`
	color: var(--purple-primary);
	align-self: center;
	font-size: var(--text-3xl);
	font-weight: 600;
`;
