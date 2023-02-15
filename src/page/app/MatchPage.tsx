import React from "react";
import styled from "styled-components";
import AllMatch from "../../components/app/match/AllMatch";
import {
  AllMatchWrapper,
  MatchPageWrapper,
  MyMatchWrapper,
} from "../../components/app/match/match.style";
import MyMatch from "../../components/app/match/MyMatch";

const MatchPage = () => {
  return (
    <MatchPageWrapper>
      <AllMatch />
      <MyMatch />
    </MatchPageWrapper>
  );
};

export default MatchPage;
