import Chip from "@mui/material/Chip";
import { size } from "lodash";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Bird } from "../home/home.api";
import { LeaderboardTable } from "../home/homepage.style";
export interface Props {
  ranks: Bird[];
  tab: number;
}
const RankingLeaderBoard = ({ ranks,tab }: Props) => {
  useEffect(() => {
    console.log(ranks);
    
  }, [ranks]);

  return (
    <LeaderboardTable>
      <thead>
        <tr>
          <th>Top</th>
          <th>Bird name<Chip style={{fontSize:"2rem"}} size="medium" label={"ID"} /></th>
          <th>Type</th>
          <th>Owner</th>
          <th>Win</th>
          <th>Ratio</th>
          <th>Elo</th>
        </tr>
      </thead>
      <tbody>
        {ranks?.map((bird, i) => (
          <tr key={bird?.id}>
            <td>{i + 1}</td>
            <td>{bird?.name}<Chip style={{fontSize:"2rem"}} size="medium" label={"bird.number"} /></td>
            <td>{"Chao mao"}</td>
            <td>{"bird?.ownerId"}</td>
            <td>{"bird?.ratio.win"}</td>
            <td>{"bird?.ratio.ratio"}</td>
            <td>{bird?.elo}</td>
          </tr>
        ))}
        {/* <tr>
                <td>1</td>
                <td>Louis Vuitton</td>
                <td>Type</td>
                <td>xWyvernPx</td>
                <td>1600</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Louis Vuitton</td>
                <td>Type</td>
                <td>xWyvernPx</td>
                <td>1600</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Louis Vuitton</td>
                <td>Type</td>
                <td>xWyvernPx</td>
                <td>1600</td>
            </tr> */}
      </tbody>
    </LeaderboardTable>
  );
};

export default RankingLeaderBoard;


