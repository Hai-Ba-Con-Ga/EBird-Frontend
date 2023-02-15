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
  height: calc(100% - var(--header-height))
`;

export const ScreenWrapper =styled.div`
  flex: 1;
  background-color: var(--color-coffee);
  overflow: hidden;
`
export const SidebarWrapper = styled.div`
  /* flex : 0 0 0px; */
  width: 300px;
  /* overflow: hidden; */
  position: relative;
  transition: all 0.3s linear;
  box-shadow: -2px 0px 10px 0px  var(--dark-green);
  z-index: 3;
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
  width: 6rem;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  left : 0;
  transform: translate(-60%,-50%);
  border-radius: var(--roundedFull);
  /* border: yellow 2px solid; */
  border:none;
  transition: all 0.2s linear;
  & svg {
    transition: all 0.4s linear;
  }
  background-color: var(--dark-green);
  
`

export const SidebarBackdrop = styled.div`
  /* display: absolute; */
  width: 100%;
  height: 100%;
  background-color:rgba(52, 69, 61,0.8);
  backdrop-filter: blur( 16.5px );-webkit-backdrop-filter: blur( 16.5px );
  z-index: 5;
`
export const DecorCircle = styled.div`
  width: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  aspect-ratio: 1;
  background-color: rgba(236,202,110,255);
  /* background-color: red; */
  border-radius: var(--roundedFull) ;
  box-shadow: 0px 0px 50px 50px rgba(236,202,110,255);
`