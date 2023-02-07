import React from "react";
import { GradientGreenButton } from "../../common/button/Button.style";
import { IntroBlock, IntroSectionWrapper } from "./IntroSection.style";

const IntroSection = () => {
  return (
    <IntroSectionWrapper id="about">
      {/* TODO : 3D */}
      <IntroBlock>
        <h1>your own story in Globird</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          fuga nesciunt, autem ea doloribus veniam?
        </h4>
        <GradientGreenButton>Join now</GradientGreenButton>
      </IntroBlock>
    </IntroSectionWrapper>
  );
};

export default IntroSection;
