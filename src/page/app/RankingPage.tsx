import React from "react";
import useHomepage from "../../components/app/home/useHomepage";
import { RankingWrapper,RankingMainContent,RankingBoard
,MyRanking,HeaderRanking } from "../../components/app/rank/rank.style";
import LeaderBoard from "../../components/app/home/LeaderBoard";

const RankingPage = () => {
  const { leaderboard } = useHomepage();
  return (
    <RankingWrapper>
      <RankingMainContent>
        
        
          <RankingBoard>
            <HeaderRanking>
              <h1>FIND PLAYER</h1>
              <h1>SELECT</h1>
            </HeaderRanking>
            <h1>RANKING BOARD</h1>
            <LeaderBoard ranks={leaderboard} />
          </RankingBoard>
        

        <MyRanking>
          <h1>MY RANKING</h1>
        </MyRanking>

      </RankingMainContent>
    </RankingWrapper>
  );
};

export default RankingPage;