/* eslint-disable */
import { Environment, OrbitControls } from "@react-three/drei";
import {} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Canvas } from "@react-three/fiber";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GradientGreenButton } from "../../common/button/Button.style";
import { Model } from "../../common/three_model/Colibri.3d";
import Bird1 from "./210604_Colibri";
import { IntroBlock, IntroSectionWrapper } from "./IntroSection.style";
// import Phoenix from "./Phoenix";
const IntroSection = () => {
	const nav = useNavigate();
	return (
		<IntroSectionWrapper id="about">
			{/* TODO : 3D */}
			<StyledCanvas shadows>
				<ambientLight />
				<OrbitControls enableZoom={false} enableRotate={false} />
				{/* <mesh>
					<boxBufferGeometry />
					<meshNormalMaterial />
				</mesh> */}
				<directionalLight
					position={[-5, 5, 5]}
					castShadow
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
				/>
				<group position={[0, -1, 0]}>
					<Model />
				</group>
				<mesh
					rotation={[-0.5 * Math.PI, 0, 0]}
					position={[0, -1, 0]}
					receiveShadow
				>
					<planeBufferGeometry args={[10, 10, 1, 1]} />
					<shadowMaterial transparent opacity={0.2} />
				</mesh>
			</StyledCanvas>
			<IntroBlock>
				<h1 style={{ pointerEvents: "none" }}>
					Grow and compete with birds? Join our community now!
				</h1>
				<GradientGreenButton onClick={() => nav("/login")}>
					Join now
				</GradientGreenButton>
			</IntroBlock>
			{/* TODO : 3D */}

			{/* <StyledCanvas shadows>
        <cubeTexture ></cubeTexture>
        <ambientLight/>
        <OrbitControls/>
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
        {<Bird1/>}
        <Phoenix/>
      </group> */}
			{/* <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
      </mesh> */}
			{/* <Environment files={"/models/landing/enviroment.hdr"} background /> */}

			{/* </StyledCanvas> */}
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
