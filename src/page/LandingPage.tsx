import React from "react";


import styled from "styled-components";
import LandingHeader from "../components/common/header/LandingHeader";
import IntroSection from "../components/landing/intro/IntroSection";
import RankSection from "../components/landing/rank/RankSection";
import RuleSection from "../components/landing/rule/RuleSection";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  /* scroll-padding: 50px 0 0 0; */

`
const LandingPage = () => {
  return (
    <Wrapper style={{scrollSnapType:"y mandatory"}}>
      <LandingHeader></LandingHeader>
      <IntroSection />
      <RankSection />
      <RuleSection />
    </Wrapper>
  );
};

export default LandingPage;
