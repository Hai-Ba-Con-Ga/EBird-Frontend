import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Bird } from "../../../../utils/types";
import { BirdApi } from "./bird.api";
type Props = {
	birdId: string;
};
export const BirdDetailWrapper = styled.div`
	width: 100%;
	height: 95%;
	/* background-color: red; */
	padding: 2rem;
	display: flex;
`;
export const SideTabWrapper = styled.div`
	height: 100%;
	flex: 0 0 20%;
	/* background-color: green; */
	padding-right: 2rem;
	border-right: 3px solid var(--dark-blue);
`;
export const BirdInfoWrapper = styled.div`
	overflow-y: auto;
	width: 100%;
`;
export const ModalTitle = styled.h2`
	font-size: var(--text-7xl);
	font-weight: 600;
	color: var(--dark-blue);
	text-transform: uppercase;
	display: inline-block;
	position: relative;
	left: 50%;
	margin: 2rem 0;
	padding: 1rem 0;
	transform: translateX(-50%);
`;
export const TabItem = styled.h3`
	font-size: var(--text-5xl);

	${({ active }: { active: boolean }) =>
		active ? "color : var(--lighter-dark-blue);" : "color: var(--dark-blue);"}
	font-weight: 600;
	transition: color 0.25s linear;
	cursor: pointer;
	text-align: right;
`;
const BirdDetailModal = ({ birdId }: Props) => {
	const tabs = ["Overview", "Match History"];
	const [currentTab, setCurrentTab] = useState<string>("Overview");
	const [bird, setBird] = useState<Bird>();
	useEffect(() => {
		if (birdId) {
			BirdApi.getBirdDetail(birdId)
				.then((res) => res.data)
				.then((bird) => setBird(bird));
		}
	}, [birdId]);
	return (
		<>
			<ModalTitle>Bird Information</ModalTitle>
			<BirdDetailWrapper>
				<SideTabWrapper>
					{tabs.map((tab, i) => (
						<TabItem
							key={i}
							active={tab === currentTab}
							onClick={() => setCurrentTab(tab)}
						>
							{tab}
						</TabItem>
					))}
				</SideTabWrapper>
				<BirdInfoWrapper>
					{currentTab === tabs[0] ? (
						<BirdOverview bird={{} as any}></BirdOverview>
					) : currentTab === tabs[1] ? (
						<BirdHistoryMatch />
					) : (
						<BirdOverview bird={{} as any}></BirdOverview>
					)}
				</BirdInfoWrapper>
			</BirdDetailWrapper>
		</>
	);
};
export default BirdDetailModal;

export const BirdOverview = ({ bird }: { bird: Bird }) => {
	return (
		<BirdDetailWrapper>
			<BirdOverviewCover>
				<img src="https://source.unsplash.com/random" alt="" />
			</BirdOverviewCover>
		</BirdDetailWrapper>
	);
};
export const BirdOverviewWrapper = styled.div`
	height: 100%;
	width: 100%;
`;
export const BirdOverviewCover = styled.div`
	width: 100%;
	height: 30rem;
	border-radius: var(--roundedSmall);
	overflow: hidden;
`;

export const BirdHistoryMatch = () => {
	return <h1>History Match</h1>;
};
