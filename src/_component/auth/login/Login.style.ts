import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GradientGreenButton } from "../../common/button/Button.style";

export const LoginFormWrapper = styled.form`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    color: var(--black);
    text-transform: capitalize;
    font-size: var(--text-9xl);
    margin-bottom: 5rem;
  }
`;
export const AuthFormSubmitButton = styled(GradientGreenButton)`
  width: fit-content;
  padding: 1.35rem 5rem;
  font-size: var(--text-2xl);
  margin: 1rem auto;
`;

export const ForgotLink = styled(NavLink)`
  font-size: var(--text-xl);
  color: var(--gold-primary);
  font-weight: 600;
  text-align: right;
  margin-bottom: 1.25rem;
  margin-top: 0.75rem;
`;
export const AuthFormOrDivider = styled.div`
  width: 80%;
  height: 2px;
  border-radius: var(--roundedFull);
  background-color: var(--gray);
  margin: 1.5rem auto;
  position: relative;
  &::after {
    content: "or";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: capitalize;
    padding: 0 0.5rem;
    background-color: var(--white);
  }
`;

export const OauthButtons = styled.div`
  margin: 1rem auto;
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;
export const OauthLink = styled.a`
  display: grid;
  place-items: center;
  padding: 1rem;
  border: 2px solid var(--black);
  border-radius: var(--roundedLarge);
`;
