import styled from "styled-components";
import { ButtonCommon } from "../button/Button.style";


export const UpdateResultFormWrapper = styled.form`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding : 4rem 1rem;
& h1{
    margin-top:5px;
    margin-bottom:0px
}
`
export const UpdateResultTitle = styled.h1`
    font-size: var(--text-7xl);
    font-weight: 600;
    color : var(--dark-blue);
    text-transform: uppercase;
    margin: 2rem 0rem;
`


export const UpdateResultProof = styled.label`
    border: 2px dashed;
    width: 40%;
    height: 40%;
    font-size: var(--text-3xl);
    font-weight: 600;
    color : var(--dark-blue);
    text-transform: uppercase;
    margin: 2rem 0rem;
    display: flex;
	align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const UpdateResultInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  
`

export const ConfirmButton = styled(ButtonCommon)`
    margin-top: 110px;
    font-weight: 600;
    border-radius: var(--roundedSmall);
    background-color: var(--green);
    color : var(--white);
    font-size: var(--text-3xl);
    padding : 1.75rem 4rem;
    
`

export const BirdSelectArea = styled.div`
  flex : 0 0  fit-content;
  display: grid;
  place-items: center;
`

export const SelectUpload = styled.select`
  font-size: var(--text-7xl);
    font-weight: 400;
    color : var(--dark-blue);
    text-transform: uppercase;
    margin: 2rem 0rem;
    border: 3px solid;

    
`


