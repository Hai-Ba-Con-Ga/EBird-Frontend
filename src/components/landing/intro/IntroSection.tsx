import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { GradientGreenButton } from "../../common/button/Button.style";
import { IntroBlock, IntroSectionWrapper } from "./IntroSection.style";
// import Phoenix from "./Phoenix";
// import LandingScene from "./Scene";
/* eslint-disable */
const IntroSection = () => {
  return (
    <IntroSectionWrapper id="about">
      {/* TODO : 3D */}
      {/* <StyledCanvas shadows>
        <ambientLight />
        <OrbitControls />
        <mesh>
          <boxBufferGeometry/>
          <meshNormalMaterial/>
        </mesh>
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <group position={[0, -1, 0]}>
          <LandingScene/>
          <Phoenix/>
        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </StyledCanvas> */}
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
const StyledCanvas = styled(Canvas)`
  position: absolute !important;
  inset: 0;
  height: 100%;
  width: 100%;
`;
export default IntroSection;
