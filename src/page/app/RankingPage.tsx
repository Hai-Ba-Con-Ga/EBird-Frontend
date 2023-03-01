import React, { useCallback, useEffect, useState } from "react";
import useHomepage from "../../components/app/home/useHomepage";
import {
  RankingWrapper,
  RankingMainContent,
  RankingBoard,
  MyRanking,
  HeaderRanking,
  MatchTab,
} from "../../components/app/rank/rank.style";
import LeaderBoard from "../../components/app/home/LeaderBoard";
import RankingLeaderBoard from "../../components/app/rank/RankingLeaderBoard";
import useRank from "../../components/app/rank/useRank";

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

  useEffect(() => {
    console.log("TAB", tab);
  }, [tab]);
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
        </MyRanking>
      </RankingMainContent>
    </RankingWrapper>
  );
};

export default RankingPage;
