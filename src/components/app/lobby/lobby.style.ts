import styled from "styled-components";
export const LobbyWrapper = styled.div`
    width: 100%;
    height: 100%; 
    background-color: var(--dark-green);
    `
export const LobbyBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--dark-green);
    position: absolute;
    z-index: -1;
    backdrop-filter: blur( 16.5px );-webkit-backdrop-filter: blur( 16.5px );

`
export const PageTitle = styled.h1`
    font-size: var(--text-7xl);
    color: var(--gold-secondary);
    text-transform: uppercase;
    margin-top: 0;

`
export const PageMain =styled.div`
    height: 100%;
    width: 100%;
    padding: var(--page-padding);
    position: relative;;
    z-index: 1;
    color : red;

`
export const RequestGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`
// Request Card
export const RequestCardWrapper = styled.div`
    width: 35rem;
    height: fit-content;
    padding : 2rem;
    display : flex;
    flex-direction: column;
    border : 2px solid var(--color-coffee);
    border-radius : var(--roundedSmall);
`
export const RequestCardInfomationField = styled.div`
    margin:  .25rem 0;
    display: flex;
    gap : .75rem;
    font-size: var(--text-2xl);
    color : var(--color-coffee);
    
    
`

export const RequestBirdWrapper = styled.div`
    display: flex;
    gap : 1rem;
    
    ${({isOwner}:{isOwner:boolean})=>{
        return isOwner ? "flex-direction: row-reverse" :"";
    }}

`
export const BirdImage = styled.div`
    width:5rem;
    aspect-ratio: 1;
    border-radius: var(-roundedFull);
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const BirdInformations = styled.div`
    display: flex;
    flex-direction : column;
    align-items: ${({isOwner}:{isOwner :boolean})=>{
        return isOwner ? "flex-end" : "flex-start";
    }};
    font-size: var(--text-small);
`
export const RequestBirdContainer = styled.div`
display: flex; 
font-size: var(--text-medium);
gap :  1rem;
`