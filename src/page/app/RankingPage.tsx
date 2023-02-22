import React, { useCallback, useEffect, useState } from "react";
import useHomepage from "../../components/app/home/useHomepage";
import {
  RankingWrapper,
  RankingMainContent,
  RankingBoard,
  MyRanking,
  HeaderRanking,
  MatchTab
} from "../../components/app/rank/rank.style";
import LeaderBoard from "../../components/app/home/LeaderBoard";
import RankingLeaderBoard from "../../components/app/rank/RankingLeaderBoard";

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
  const { leaderboard } = useHomepage();//BIRD[]
  const [tab, setTab] = useState<number>(1);
  useEffect(() => {
    console.log("TAB", tab);
  }, [tab]);
  return (
    <RankingWrapper>
      <RankingMainContent>
          <RankingBoard>
            {/* <HeaderRanking>
              <h1>FIND PLAYER</h1>
              <h1>SELECT</h1>
            </HeaderRanking> */}

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
            ))}

            <h1>RANKING BOARD</h1>
            <h1>{tabs.find((tb)=>tb.value==tab)?.show || "unknow"}</h1>

            <RankingLeaderBoard tab={tab} ranks={leaderboard} />

          </RankingBoard>
        

        <MyRanking>
          <h1>MY RANKING</h1>
        </MyRanking>

      </RankingMainContent>
    </RankingWrapper>
  );
};

export default RankingPage;