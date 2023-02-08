import styled from "styled-components"
export const RoomCardWrapper = styled.div `
width: 15rem;
height: 8rem;
border-radius: var(--roundedSmall);
background: linear-gradient(to right, var(--green) 100%,black 0%);
color : var(--white);
font-size: var(--text-5xl);
display: grid;
place-items: center;
font-weight: 600;
cursor: pointer;
box-shadow: 0px 0px 10px -3px var(--green);
/* color : var(--dark-blue) */
&:hover {
    box-shadow: 0px 0px 10px 0px var(--active);

}
`

export const RoomSelectFormWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding : 4rem 1rem;

`
export const RoomSelectTitle = styled.h1`
    font-size: var(--text-7xl);
    font-weight: 600;
    color : var(--dark-blue);
    text-transform: uppercase;
    margin: 4rem 0rem;
`
export const RoomCardList = styled.div`
margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
`