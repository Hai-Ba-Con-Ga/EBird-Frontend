import React, { useEffect, useState } from "react";
import LeaderBoard from "../../app/home/LeaderBoard";
import useHomepage from "../../app/home/useHomepage";
import ImageComponent from "../../common/image/ImageComponent";
import SquareImageComponent from "../../common/image/SquareImageComponent";
import {
	RankingChampImage,
	RankingHeading,
	RankingTable,
	RankSectionWrapper,
	SectionTransitionGradient,
} from "./RankSection.style";

const RankSection = () => {
	const { leaderboard, tablePagination } = useHomepage();

	return (
		<RankSectionWrapper id="ranking">
			<SectionTransitionGradient />
			<RankingHeading>bird leaderboards</RankingHeading>
			<LeaderBoard pagination={tablePagination} ranks={leaderboard} />
		</RankSectionWrapper>
	);
};

export default RankSection;
