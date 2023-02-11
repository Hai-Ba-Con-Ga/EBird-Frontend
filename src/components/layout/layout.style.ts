import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
`;
export const AppContentWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const ScreenWrapper =styled.div`
  flex: 1;
  background-color: var(--color-coffee);
  overflow: hidden;
`
export const SidebarWrapper = styled.div`
  background-color: black;
  /* flex : 0 0 0px; */
  width: 300px;
  /* overflow: hidden; */
  position: relative;
  transition: all 0.3s linear;
  &.sidebar-deactive {
    /* flex: 0 0 30rem; */
  
    width: 0px;
    
  }
  &.sidebar-deactive button{

    transform: translate(-80%,-50%);
    & svg {
      transform: rotate(180deg);
    }
  }

`

export const SidebarToggleButton = styled.button`
  width: 4rem;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  left : 0;
  transform: translate(-50%,-50%);
  border-radius: var(--roundedFull);
  border: yellow 2px solid;
  transition: all 0.2s linear;
  & svg {
    transition: all 0.4s linear;
  }
`