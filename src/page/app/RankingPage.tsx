import React, { useCallback, useEffect, useMemo, useState } from "react";
import useHomepage from "../../components/app/home/useHomepage";
import {
	RankingWrapper,
	RankingMainContent,
	RankingBoard,
	MyRanking,
	HeaderRanking,
	MatchTab,
	MyRankCard,
	MyBirdAvaRank,
} from "../../components/app/rank/rank.style";
import LeaderBoard from "../../components/app/home/LeaderBoard";
import RankingLeaderBoard from "../../components/app/rank/RankingLeaderBoard";
import useRank from "../../components/app/rank/useRank";
import useApp from "../../components/app/common/useApp";
import { BirdApi } from "../../components/app/profile/bird/bird.api";
import { Typography } from "@mui/material";

const tabs = [
	{
		value: 1,
		show: "ALL",
	},
	{
		value: 2,
		show: "HO CHI MINH",
	},
	{
		value: 3,
		show: "HA NOI",
	},
];

const RankingPage = () => {
	const [textBird, setTextBird] = useState<string>("");
	const { tab, setTab, rank } = useRank({ searchPlayerKeyword: textBird });
	const [currentBirdRank, setCurrentRank] = useState<any>();
	const [birdDetail, setBirdDetail] = useState<any>();
	const { currentBird } = useApp({ useSelection: false });
	useEffect(() => {
		if (currentBird && currentBird.id) {
			BirdApi.getCurrentBirdRank(currentBird?.id).then((res) => {
				console.log("CURRENT RANK", res);

				setCurrentRank(res.data);
			});
		}
	}, [currentBird]);
	useEffect(() => {
		if (currentBirdRank && currentBirdRank.id) {
			BirdApi.getBirdDetail(currentBirdRank?.id).then((res) =>
				setBirdDetail(res.data)
			);
		}
	}, [currentBirdRank]);
	useEffect(() => {
		console.log("TAB", tab);
	}, [tab]);
	const birdAvatar = useMemo(() => {
		if (birdDetail?.id) {
			if (
				birdDetail?.resourceList?.length > 0 &&
				birdDetail?.resourceList[0].dataLink
			) {
				return birdDetail.resourceList[0].dataLink;
			} else {
				return "https://indiabiodiversity.org/files-api/api/get/raw/img//Pycnonotus%20jocosus/pycnonotus_jocosus_2.jpg";
			}
		} else {
			return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNSuIiJCjxQ5gDnadu2n7QFDrDTcHvRH53OngpEKPcPRo6KUkOMJXXreesiUn5p-zka0&usqp=CAU";
		}
	}, [birdDetail]);
	return (
		<RankingWrapper>
			<RankingMainContent>
				<RankingBoard>
					<HeaderRanking></HeaderRanking>
					{/* 
            {tabs?.map((navTab) => (
              <MatchTab
                key={navTab.value}
                active={navTab.value === tab}
                onClick={useCallback(() => {
                setTab(navTab.value);
                }, [])}
              >
                {navTab.show}
              </MatchTab>
            ))} */}

					<h1>RANKING BOARD</h1>

					<RankingLeaderBoard tab={tab} ranks={rank} />
				</RankingBoard>

				<MyRanking>
					<h1>MY RANKING</h1>
					<MyRankCard>
						<MyBirdAvaRank>
							<img src={birdAvatar} alt="" />
						</MyBirdAvaRank>
						<Typography
							color={"var(--dark-green)"}
							fontWeight={600}
							fontSize={"var(--text-7xl)"}
							style={{
								margin: "1rem 0",
							}}
						>
							{currentBirdRank?.name}
						</Typography>
						<Typography
							fontSize={"var(--text-3xl)"}
							color={"var(--dark-blue)"}
							fontWeight="600"
						>
							Position <span style={{}}>#{currentBirdRank?.rank}</span>
						</Typography>
						<Typography>{}</Typography>
						<Typography fontSize={"var(--text-2xl)"}>
							Win: {currentBirdRank?.ratio?.win} || Lose:{" "}
							{currentBirdRank?.ratio?.win} || Ratio:{" "}
							{currentBirdRank?.ratio?.win + currentBirdRank?.ratio?.lose == 0
								? "0"
								: currentBirdRank?.ratio?.win /
								  (currentBirdRank?.ratio?.win + currentBirdRank?.ratio?.lose)}
						</Typography>
					</MyRankCard>
				</MyRanking>
			</RankingMainContent>
		</RankingWrapper>
	);
};

export default RankingPage;
