import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Bird, Match } from "../../../../utils/types";
import MatchCard from "../../match/MatchCard";
import { BirdApi } from "./bird.api";
import HistoryMatchCard from "./BirdMatchHistory";
import useBird from "./useBird";
type Props = {
	birdId: string;
};
export const BirdDetailWrapper = styled.div`
	width: 100%;
	height: 95%;
	/* background-color: red; */
	padding: 2rem;
	display: flex;
	/* flex-direction: column; */
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
						<BirdOverview bird={bird as any}></BirdOverview>
					) : currentTab === tabs[1] ? (
						<BirdHistoryMatch birdId={birdId} />
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
	const birdAvatar = useMemo(() => {
		if (bird?.id) {
			if (bird?.resourceList?.length > 0 && bird?.resourceList[0].dataLink) {
				return bird.resourceList[0].dataLink;
			} else {
				return "https://indiabiodiversity.org/files-api/api/get/raw/img//Pycnonotus%20jocosus/pycnonotus_jocosus_2.jpg";
			}
		} else {
			return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNSuIiJCjxQ5gDnadu2n7QFDrDTcHvRH53OngpEKPcPRo6KUkOMJXXreesiUn5p-zka0&usqp=CAU";
		}
	}, [bird]);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "2rem 3rem",
			}}
		>
			<BirdOverviewCover>
				<img src={birdAvatar} alt="" />
			</BirdOverviewCover>
			<div
				style={{
					margin: "1rem 0 ",
					width: "100%",
					// padding: "1rem",
					display: "flex",
					justifyContent: "space-between",
					color: "var(--dark-blue)",
					fontWeight: "600",
					fontSize: "var(--text-2xl)",
				}}
			>
				<span>
					Bird name <label htmlFor="">{bird?.name}</label>
				</span>
				<span>
					Bird Type <label htmlFor="">{"bird?.birdTypeId"}</label>
				</span>
				<span>
					Color <label htmlFor="">{bird?.color}</label>
				</span>
			</div>
			<div
				style={{
					margin: "1rem 0 ",
					width: "100%",
					// padding: "1rem",
					display: "flex",
					justifyContent: "space-between",
					color: "var(--dark-blue)",
					fontWeight: "600",
					fontSize: "var(--text-2xl)",
				}}
			>
				<span>
					Weight <label htmlFor="">{bird?.weight}</label>
				</span>
				<span>
					Elo <label htmlFor="">{bird?.elo}</label>
				</span>
				<span>
					Description <label htmlFor="">{bird?.description}</label>
				</span>
			</div>
		</div>
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

export const BirdHistoryMatch = ({ birdId }: { birdId: string }) => {
	const [matches, setMatches] = useState<Match[]>([]);
	const { getBirdMatchHistory } = useBird();
	useEffect(() => {
		if (birdId) {
			getBirdMatchHistory(birdId).then((matches) => setMatches(matches));
		}
	}, [birdId]);
	return (
		<MatchList>
			{matches?.map((match) => (
				<HistoryMatchCard key={match?.id} match={match} />
			))}
		</MatchList>
	);
};
export const MatchList = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 3rem;
	gap: 2rem;
`;
