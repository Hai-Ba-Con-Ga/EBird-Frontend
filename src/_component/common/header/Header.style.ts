import styled from "styled-components";

export const ClientHeaderWrapper = styled.div``;

export const LandingHeaderWrapper = styled.div`
  width: 100%;
  height: 10rem;
  padding: 1rem 2rem;
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  z-index: var(--index-header);
`;
export const LandingHeaderNavBar = styled.ul`
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 4rem;
  li a {
    color: var(--white);
    font-weight: 600;
    text-transform: uppercase;
    font-size: var(--text-xl);
  }
`;

export const HeaderLogo = styled.div`
  width: 6rem;
  aspect-ratio: 1;
`;
export const HeaderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    a {
      color: var(--white);
    }
  }
`;
