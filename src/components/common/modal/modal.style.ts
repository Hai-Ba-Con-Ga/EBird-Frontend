import styled from "styled-components";

export const CommonModalMain = styled.div`
    position: fixed;
    inset : 10% 18%;
    background-color : red;
    background-color:  var(--color-coffee);
    border:  var(--dark-blue) 3px groove;
    border-radius: var(--roundedSmall);
    box-shadow: 1px 1px 10px -3px var(--dark-blue);
    button{ 
        padding : .5rem;
        position: absolute;
        right : .5rem;
        top: .5rem;;
    }
    `
export const CommonModalWrapper = styled.div`
z-index: var(--z-index-modal);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left:0;
    top: 0;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4.5px );-webkit-backdrop-filter: blur( 4.5px );border-radius: 10px;
    /* background-color: red; */
`