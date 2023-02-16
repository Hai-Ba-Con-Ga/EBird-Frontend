import { IconChevronLeft, IconChevronUpLeft, IconClock, IconMapPin, IconSend } from '@tabler/icons-react';
import React from 'react'
import styled from 'styled-components';
import { ButtonCommon } from '../../common/button/Button.style';
import { RequestCardInfomationField } from '../lobby/lobby.style';
import { TableHeadline, TableTitle, TableWrapper } from './table.style';
import TableBird from './TableBird';

export const BackButton = styled.button`
  padding: .25rem;
  aspect-ratio: 1;
  border: 2px solid var(--dark-green);
  border-radius: var(--roundedFull);
  svg {
    transform: translateX(-1px);
  }
`
export const TableMain = styled.div`
  padding : 2rem 4rem;
  display: flex;
  height: 100%;
  margin-bottom: 3rem;
`
export const TableOpponents = styled.div`
  display: flex;
  flex-direction: column;
  gap : 2rem;
  align-items: center;
  flex: 1 1 auto;
`

export const VsDividerTable = styled.span`
  color : vaR(--dangerous);
  font-size: var(--text-3xl);
  font-weight: 600;
`
export const TableOthers = styled.div`
  display: flex;
  flex-direction: column;
`
export const TableInformations = styled.div`
display: flex;;
flex-direction: column;
gap: .5rem;
`
export const TableInformationItem = styled(RequestCardInfomationField)`
svg {
  scale : 1.4;
}
  color : var(--dark-blue);
  font-size: var(--text-5xl);
`
export const ChatFrame = styled.div`
  margin-top : 3rem;
  min-width : 45rem;
  max-width : 45rem;
  height: 100%;
  border-radius : var(--roundedMedium);
  border: 2px solid var(--dark-blue);
  display: flex;
  flex-direction: column;
`
export const ChatBox = styled.div`
  flex : 1 1 auto;
  padding : 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  gap : 1.25rem;
  /* flex-wrap: wrap; */
  overflow-y: auto;
  max-height : 40rem;
`
export const ChatMessage = styled.form`
  padding: 0.5rem 2rem;
  border-top : 2px solid var(--dark-blue);
  display : flex;
  gap: 1rem;
  align-items : center;
  input {
    font-size: var(--text-2xl);
    flex: 1 1 auto;
    padding : 0.5rem 0;
    color : var(--dark-blue);
    &::placeholder {
      color : var(--dark-blue);
    }
  }
  svg {
    flex:0 0  2rem;
    aspect-ratio: 1;
    color : var(--dark-blue);
    cursor: pointer;
  }
  
`
export const ChatItem = styled.span`
  display: flex;
  align-items: center;

  gap : 0.5rem;
  span:first-child {
    padding : 0.25rem;
    background-color : var(--dangerous);
    color: var(--white);
    font-weight: 600;
    font-size: var(--text-large);
  }
  span:nth-child(2) {
    font-size: var(--text-large);
    font-weight: 600;
    color : var(--dark-blue);
  }
`
export const ConfirmButton = styled(ButtonCommon)`
  background-color : var(--dark-blue);
  color : var(--white);
  font-size: var(--text-3xl);
  width : fit-content;
  margin:  0 auto;
  padding : 1.25rem 4rem;
  border-radius: var(--roundedSmall);
`;
export 
const MatchTable = () => {
  return (
    <TableWrapper>
      <TableHeadline>
        <BackButton>
          <IconChevronLeft color="var(--dark-green)" />
        </BackButton>
        <TableTitle>Table</TableTitle>
      </TableHeadline>
      <TableMain>
        <TableOpponents>
          <TableBird bird={{} as any} />
          <VsDividerTable>Vs</VsDividerTable>
          <TableBird bird={{} as any} />
        </TableOpponents>
        <TableOthers>
          <TableInformations>
            <TableInformationItem>
              <IconMapPin />
              <span>Some where on Earth</span>
            </TableInformationItem>
            <TableInformationItem>
              <IconClock/>
              <span>14:00</span>
            </TableInformationItem>
          </TableInformations>
          <ChatFrame>
            <ChatBox>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>Hello Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illum accusamus iste expedita maxime at nesciunt atque non vitae ad!</span>
              </ChatItem>
            </ChatBox>
            <ChatMessage>
              <input type="text" placeholder='Type something...' />
              <IconSend/>
            </ChatMessage>
          </ChatFrame>
          
        </TableOthers>
      </TableMain>
        <ConfirmButton>Confirm</ConfirmButton>      
    </TableWrapper>
  );
}

export default MatchTable;