import React, { useEffect, useState } from "react";
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
  const [leaderboard, setLeaderboard] = useState<
    {
      rank: number;
      bird_img: string;
      bird_type: string;
      owner: string;
      elo: number;
    }[]
  >([]);
  useEffect(() => {
    //TODO: fetch overall ranking list
    //TODO: update type of ranking based on response from server
    setLeaderboard([
      {
        rank: 1,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1654,
      },
      {
        rank: 2,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1600,
      },
      {
        rank: 3,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1578,
      },
      {
        rank: 4,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1554,
      },
      {
        rank: 5,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1554,
      },
      {
        rank: 6,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1554,
      },
      {
        rank: 7,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1554,
      },
      {
        rank: 8,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1554,
      },
      {
        rank: 9,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1554,
      },
      {
        rank: 10,
        bird_img: "https://source.unsplash.com/random",
        bird_type: "Chao mao",
        owner: "xWyvernPx",
        elo: 1554,
      },
    ]);
  }, []);
  return (
    <RankSectionWrapper id="ranking">
      <SectionTransitionGradient />
      <RankingHeading>bird leaderboards</RankingHeading>
      <RankingTable>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Type</th>
            <th>Owner</th>
            <th>ELO </th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((champ) => (
            <tr key={champ.rank}>
              <td>{champ.rank}</td>
              <td>
                <SquareImageComponent
                  width="5rem"
                  src={champ.bird_img}
                ></SquareImageComponent>
              </td>
              <td>{champ.bird_type}</td>
              <td>{champ.owner}</td>
              <td>{champ.elo}</td>
            </tr>
          ))}
        </tbody>
      </RankingTable>
    </RankSectionWrapper>
  );
};

export default RankSection;
