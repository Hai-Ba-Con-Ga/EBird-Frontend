import styled from "styled-components";

export const ButtonCommon = styled.button`
  font-size: var(--text-large);
  padding: 1rem 2rem;
`;
export const OutlineWhiteButton = styled(ButtonCommon)`
  border: 2px solid var(--white);
  border-radius: var(--roundedMedium);
`;
