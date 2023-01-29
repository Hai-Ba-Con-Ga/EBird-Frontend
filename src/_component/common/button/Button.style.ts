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
  background: linear-gradient(#36755e, #6faf98);
  border-radius: var(--roundedMedium);
  border: none;
  &:hover {
    opacity: 0.9;
  }
`;
