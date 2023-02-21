import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const GroupPageWrapper = styled.div`
  flex : 0 0 80%;
  height: 100%;
  /* border: 3px solid var(--dark-green); */
  /* border-radius: var(--roundedSmall); */
  h1 {
    text-transform: uppercase;
    color : var(--dark-green);
    margin : 4rem auto;
    text-align: center;
    font-size: var(--text-7xl);
  }
`;
export const GroupTable = styled.table `
    margin : 10rem auto;
    border : 3px solid;
    width : 95%;
    font-size: var(--text-3xl);
    color : var(--dark-green);
    
    & tr th {
        font-size: var(--text-5xl);
    }
    & tr td:first-child{
        padding-top: 1rem;
        font-size: var(--text-4xl);   
        font-weight: 600;  
    }
    & tr th ,&  tr td {
        padding: 1rem  2rem 2rem 2rem;
        text-align : center;
        }
`;
export const GroupLink  = styled(NavLink)`
    color : var(--dark-green);
    font-weight: 600;
    width: 100%;
    margin : 0 auto;
    text-align:center;
    font-size: var(--text-4xl);
    display: block;
`;

export const GroupDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #34453d; */
  opacity: 0.9;
  display: flex;
  flex-direction: column;
`
export const GroupDetailMainContent = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
`;

export const Online = styled.div`
  width: 400px;
  color: white;
  border: 1px solid white;
  
`;
export const OnlineMember = styled.div`
  width: 100%;
  height: 40%;
  color: white;
  border: 1px solid white;
  text-align: center;

  
`;
export const ChatGroup = styled.div`
  width: 100%;
  height: 60%;
  color: white;
  border: 1px solid white;
  text-align: center;
  
`;





