import React, { useCallback, useEffect, useState } from "react";
import { GroupTable } from './grouppage.style';
// import {
//   AllMatchTabSide,
//   AllMatchWrapper,
//   MatchesLayout,
//   MatchTab,
// } from "./match.style";
// import MatchCard from "./MatchCard";

// type Props = {};
const groups = [
    "COMMON",
    "BEGINNER",
    "SEMI PRO",
    "PROFESSIONAL"
]
export interface Props {
    ranks : Bird[];
}

const AllGroup = ({ranks} : Props ) => {
    useEffect(() => {
        console.log(ranks);
      
      }, [ranks])

    return (
        
            <GroupTable>
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
            {ranks?.map((bird,i) =>(<tr key={bird?.id}>
                <td>{i+1}</td>
                <td>{bird?.name}</td>
                <td>{"bird?.birdTypeId"}</td>
                <td>{"bird?.ownerId"}</td>
                <td>{bird?.elo}</td>
            </tr>))}
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
    </GroupTable>

        
        
)
                
  
    
};

export default AllGroup;
