import { motion } from "framer-motion";
import styled from "styled-components"



export const AddFriendFormWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding : 4rem 4rem;
padding-top: 2rem;
margin-bottom: 20px;
`
export const AddFriendTitle = styled.h1`
    font-size: var(--text-7xl);
    font-weight: 600;
    color : var(--dark-blue);
    text-transform: uppercase;
    margin: 2rem 0rem;
`
export const SearchContainer = styled(motion.form)`
  display: flex;
  align-items: center;
  width: 400px;
  height: 100px;
  background-color: #f3ecdc;
  border-radius: 20px;
  border: 2px solid black;
  padding: 0 16px;
  margin-bottom: 20px;
`;
export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 25px;
  padding: 16px;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;
export const UserShowWrapper = styled.div`
    width: 100%;
    height: 70%;
    border: solid black 3px;
    border-radius: 6px;
    display: flex;
`
export const UserAvatar = styled.div`
  width: 30%;
  /* border: solid black 3px; */
  margin: 20px;
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
    height: auto;
    border-radius: 200px;
`;



