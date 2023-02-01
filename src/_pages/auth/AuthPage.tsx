import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import {
  AuthBlock,
  AuthPageWrapper,
} from "../../_component/auth/AuthPage.style";
import ImageComponent from "../../_component/common/image/ImageComponent";
import { motion } from "framer-motion";
const AuthPage: FC<
  PropsWithChildren<{
    banner?: string;
  }>
> = ({ children, banner = "https://source.unsplash.com/random" }) => {
  return (
    <Page 
    initial={{opacity : 0,transform : "scale(0.5)"}} 
    animate = {{opacity:1 ,transform: "scale(1)"}}
    >
      <PageBanner>
        <img src={banner} alt="banner" />
      </PageBanner>
      {/* <ImageComponent src={banner}></ImageComponent> */}

      {/* <AuthBlock>{children}</AuthBlock> */}
      <FormSection>{children}</FormSection>
    </Page>
  );
};
const PageBanner = styled.div`
  flex: 35% 0 0;
  height: 100vh;
`;
const FormSection = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  display: grid;
  place-items: center;
`;
const Page = styled(motion.div)`
  width: 100%;
  display: flex;
  position: relative;
`;

export default AuthPage;
