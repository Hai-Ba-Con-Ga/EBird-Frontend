import styled from "styled-components";
import { ButtonCommon } from "../button/Button.style";

export const CreateRequestFormWrapper = styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding : 3rem 4rem;
`
export const FormTitle = styled.h1`
    text-transform: uppercase;
    color: var(--dark-blue);
    font-weight: 600;
    font-size: var(--text-7xl);

` 
export const CreateButton = styled(ButtonCommon)`
    margin-top : 2rem;
    color : var(--white);
    background-color : var(--dark-blue);
    font-size: var(--text-4xl);
    padding: 1rem 5rem;
    border-radius: var(--roundedSmall);
`