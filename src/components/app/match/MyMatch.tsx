import React from "react";
import { MyMatchTitle, MyMatchWrapper } from "./match.style";
import MatchCard from "./MatchCard";

const MyMatch = () => {
  return (
    <MyMatchWrapper>
      <MyMatchTitle>My Match</MyMatchTitle>
      <MatchCard />
    </MyMatchWrapper>
  );
};

export default MyMatch;
