import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import { Bird } from "./home.api";
import { LeaderboardTable, SeeMoreRankLink } from "./homepage.style";
export interface Props {
  ranks: Bird[];
}
const LeaderBoard = ({ ranks }: Props) => {
  useEffect(() => {
    console.log(ranks);
  }, [ranks]);

  return (
    <LeaderboardTable>
      <thead>
        <tr>
          <th>Top</th>
          <th>Bird name</th>
          <th>Type</th>
          <th>Owner</th>
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

export default LeaderBoard;
