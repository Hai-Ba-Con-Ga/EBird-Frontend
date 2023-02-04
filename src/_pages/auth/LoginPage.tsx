import React from "react";
import styled from "styled-components";
import LoginForm from "../../_component/form/LoginForm";

const LoginPage = () => {
  return (
    <Page>
      <PageBanner>
        <img
          src="https://i.pinimg.com/originals/3d/07/ef/3d07ef4db7ce8de5d07d6afe031c908a.jpg"
          alt=""
        />
      </PageBanner>
      <FormSection>
        <LoginForm></LoginForm>
      </FormSection>
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
const Page = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export default LoginPage;
