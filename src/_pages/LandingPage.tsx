import React from "react";
import styled from "styled-components";
import LandingHeader from "../_component/common/header/LandingHeader";
import IntroSection from "../_component/landing/intro/IntroSection";
import RankSection from "../_component/landing/rank/RankSection";
import RuleSection from "../_component/landing/rule/RuleSection";

const LandingPage = () => {
  return (
    <div>
      <LandingHeader></LandingHeader>
      <IntroSection />
      <RankSection />
      <RuleSection />
    </div>
  );
};

export default LandingPage;
