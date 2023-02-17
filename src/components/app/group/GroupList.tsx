import React, { useCallback, useEffect, useState } from "react";
import { Group } from './group.api';
import { GroupTable } from './grouppage.style';
// import {
//   AllMatchTabSide,
//   AllMatchWrapper,
//   MatchesLayout,
//   MatchTab,
// } from "./match.style";
// import MatchCard from "./MatchCard";

// type Props = {};

export interface Props {
    groups : Group[];
}

const AllGroup = ({groups} : Props ) => {
    useEffect(() => {
        console.log(groups);
      }, [groups])

    return (
            <GroupTable>
        <thead>
            <tr>
                <th>NAME</th>
                <th>ELO</th>
                <th>MAX ELO</th>
            </tr>
            
        </thead>
        
        <tbody>
            {groups?.map((group,index) =>(<tr key={index}>
                
                <td>{group?.name}</td>
                <td>{group?.minELO}</td>
                <td>{group?.maxELO}</td>
                <td><button
                    // onClick={}
                >JOIN</button></td>
            </tr>))}
            <tr>
                <td>COMMON</td>
                <td>1010</td>
                <td>1200</td>
                <td><button>JOIN</button></td>
            </tr>
            <tr>
                <td>BEGINNER</td>
                <td>1210</td>
                <td>1400</td>
                <td><button>JOIN</button></td>
            </tr>
            <tr>
                <td>SEMI PRO</td>
                <td>1410</td>
                <td>1600</td>
                <td><button>JOIN</button></td>
            </tr>
            
        </tbody>
    </GroupTable>

        
        
)
                
  
    
};

export default AllGroup;
