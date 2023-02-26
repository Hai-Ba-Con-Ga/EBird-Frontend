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
  flex: 0 0 20%;
  
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
export const RequestGridGroupPage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const MatchArea = styled.div`
  height: 80%;
  width: 100%;
  padding: var(--page-padding);
  position: relative;
  z-index: 1;
  color: red;
  flex: 0 0 80%;
  overflow-y: auto;
`;
export const Match = styled.div`
  flex: 0 0 80%;
`;
export const MatchTitle = styled.div`
  font-size: var(--text-7xl);
  color: var(--gold-secondary);
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  h3 {
    margin: 1rem 0;
  }
  button {
    scale: 1.2;
    &:hover {
      animation: rotate 2s infinite forwards linear;
    }
  }
  @keyframes rotate {
    0% {
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;


  
export const ChatFrame = styled.div`
  margin-right: 5px;
  margin-bottom: 5px;
  min-width: 35rem;
  text-align: center;
  height: 100%;
  width: 100%;
  border-radius: var(--roundedMedium);
  border: 2px solid gold;
  display: flex;
  flex-direction: column;
`;
export const ChatBox = styled.div`
  flex: 1 1 auto;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.25rem;
  /* flex-wrap: wrap; */
  overflow-y: auto;
  max-height: 47rem;
`;
export const ChatMessage = styled.form`
  padding: 0.5rem 2rem;
  border-top: 2px solid white;
  display: flex;
  gap: 1rem;
  align-items: center;
  input {
    font-size: var(--text-2xl);
    flex: 1 1 auto;
    padding: 0.5rem 0;
    color: white;
    &::placeholder {
      color: white;
    }
  }
  svg {
    flex: 0 0 2rem;
    aspect-ratio: 1;
    color: white;
    cursor: pointer;
  }
`;
export const ChatItem = styled.span`
  display: flex;
  align-items: center;

  gap: 0.5rem;
  span:first-child {
    padding: 0.25rem;
    background-color: var(--dangerous);
    color: var(--white);
    font-weight: 600;
    font-size: var(--text-large);
  }
  span:nth-child(2) {
    font-size: var(--text-large);
    font-weight: 600;
    color: white;
  }
`;



