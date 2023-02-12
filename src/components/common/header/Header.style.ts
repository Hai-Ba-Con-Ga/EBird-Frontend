import { Link } from "react-router-dom";
import styled from "styled-components";

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
    color: var(--white);
    font-size: var(--text-2xl);
    a {
      color: var(--white);
    }
  }
`;

export const ClientHeaderWrapper = styled.div`
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-coffee);
  padding:0.5rem;
  border-bottom : 2.5px groove var(--dark-blue);
  position: relative;
  z-index: 5;
`;
export const AppHeader = styled.div`
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background-color: #ffffff5c;
  display: flex;
  height: 100%;
`
export const  AppLogo = styled.div`
  aspect-ratio: 1;
  flex : 0 0 10rem;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
`
export const BirdSelectArea = styled.div`
  flex : 0 0  fit-content;
  display: grid;
  place-items: center;
`
export const MainNavigationBar = styled.div`
  flex:  1;
  /* background-color: green; */
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  /* transform: translateX(-5rem); */
`
export const NavBarItem = styled(Link)`
  color : var(--primary-color);
  color: #484848;
  /* #F2E2D2 */
  color: var(--dark-blue);
  font-weight: 600;
  font-size: var(--text-2xl);
  text-transform: uppercase;
  display: grid;
place-items: center;
  margin: 0 1rem;
  &.nav-play-button {
    transform: translateY(20%);
  }
`
export const LogoWrapper = styled.div`
  aspect-ratio: 1;
  width: 60%;
`

