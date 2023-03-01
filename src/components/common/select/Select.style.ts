import styled from "styled-components";

export interface SelectProps {
    width? : string;
    background? : string;

}
export const SelectWrapper = styled.div`
    padding: 0.5rem;
    width: ${({width}:SelectProps)=> width? width :'fit-content'};
    height: 100%;
    border: 2px solid black;
    border-radius: var(--roundedSmall);
    cursor: pointer;
    background-color:  ${({background}:SelectProps)=> background? background :'transparent'};

    position: relative;
    svg {
        position : absolute;
        right: 0.5rem;
        top:50%;
        transform: translateY(-50%);
        transition:  all 0.25s linear;
    }
    &:hover {
        svg {
            stroke-width: 2.5px;
        }
        span {
           opacity: 1;
        }
    }
    &.select-active {
        border-bottom-color: rgba(0,0,0,0.4);
        border-radius: var(--roundedSmall) var(--roundedSmall) 0 0;
        & div{
            opacity: 1;
    transform: translateY(-0.5px) scaleY(1);
            
        }
    }
`
export const SelectValue = styled.span`
    transition: all 0.25s linear;
    font-size: var(--text-2xl);
    padding-right : 2rem; //avoid select icon
    padding-left : .5rem;
    margin-top: .25rem;
    color : var(--lighter-dark);
    display:flex;
    /* font-weight: 600; */
    height: 100%;
    align-items: center;
    justify-content:start;
    opacity: .85;
`
export const OptionsList = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% + 3.7px);
    position: absolute;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    left: -1.8px;
    top: 100%;
    transform-origin: 0 0;
    transform: translateY(-0.5px) scaleY(0);

    border: 2px solid var(--black);
    border-top: none !important;
    z-index: 3;
    background-color: var(--color-coffee);
    border-radius: 0 0 var(--roundedSmall) var(--roundedSmall);
    min-height: 3rem;
    max-height: ${({maxListHeight}:{maxListHeight? : string})=> maxListHeight ? maxListHeight : '15rem'};
    overflow-y: scroll;
    transition:  opacity 0.25s linear, transform 0.5s ease-out ;
    opacity: 0;
`
export const SelectOption = styled.span`
    width: 100%;
    padding: 0.5rem 1rem;
    min-height: 4rem;
    font-size: var(--text-xl);
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: 600;
    
    &:hover{
        background-color: var(--gold-primary);
        color:var(--white)
    }
`