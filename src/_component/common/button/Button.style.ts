import styled from "styled-components";

export const ButtonCommon = styled.button`
  font-size: var(--text-large);
  padding: 1rem 2rem;
  font-weight: bold;
  margin: 0.5rem 1rem;
`;
export const OutlineWhiteButton = styled(ButtonCommon)`
  border: 3px solid var(--white);
  border-radius: var(--roundedMedium);
`;
export const GradientGreenButton = styled(ButtonCommon)`
  color: var(--white);
  background: linear-gradient(270deg, #36755e, #6faf98);
  border-radius: var(--roundedLarge);
  box-shadow: 1px 2px 10px -5px #6faf98;
  border: none;
  transition: all 0.2s linear;
  &:hover {
    opacity: 0.9;
    box-shadow: 1px 2px 10px -2.5px #6faf98;
  }
`;
