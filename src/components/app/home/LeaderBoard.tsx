import React, { useEffect } from "react";
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
          <th>#</th>
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
            <td>{bird?.name}</td>
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
