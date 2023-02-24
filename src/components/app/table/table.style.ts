import styled from "styled-components";
import { ButtonCommon } from "../../common/button/Button.style";
import { RequestCardInfomationField } from "../lobby/lobby.style";

export const TableWrapper = styled.div`
    padding : 4rem 2rem;
    display: flex;
    flex-direction: column;
`   
export const TableHeadline = styled.div`
    display: flex;
    justify-content: flex-start;
    gap : 2rem;
    width: 100%;
    line-height: 1.5;
`
export const TableTitle = styled.span`

    font-size: var(--text-7xl);
    color : var(--dark-green);
    font-weight: 600;
    text-transform: uppercase;
`
export const BackButton = styled.button`
  padding: 0.25rem;
  aspect-ratio: 1;
  border: 2px solid var(--dark-green);
  border-radius: var(--roundedFull);
  svg {
    transform: translateX(-1px);
  }
`;
export const TableMain = styled.div`
  padding: 2rem 4rem;
  display: flex;
  gap : 4rem;
  height: 100%;
  margin-bottom: 3rem;
`;
export const TableOpponents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  `;

export const VsDividerTable = styled.span`
  color: vaR(--dangerous);
  font-size: var(--text-3xl);
  font-weight: 600;
`;
export const TableOthers = styled.div`
  flex: 0 0 30rem;
`;
export const TableInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

`;
export const TableInformationItem = styled(RequestCardInfomationField)`
  svg {
    scale: 1.4;
  }
  color: var(--dark-blue);
  font-size: var(--text-5xl);
`;
export const ChatFrame = styled.div`
  margin-top: 3rem;
  min-width: 45rem;
  max-width: 45rem;
  height: 100%;
  border-radius: var(--roundedMedium);
  border: 2px solid var(--dark-blue);
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
  max-height: 40rem;
`;
export const ChatMessage = styled.form`
  padding: 0.5rem 2rem;
  border-top: 2px solid var(--dark-blue);
  display: flex;
  gap: 1rem;
  align-items: center;
  input {
    font-size: var(--text-2xl);
    flex: 1 1 auto;
    padding: 0.5rem 0;
    color: var(--dark-blue);
    &::placeholder {
      color: var(--dark-blue);
    }
  }
  svg {
    flex: 0 0 2rem;
    aspect-ratio: 1;
    color: var(--dark-blue);
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
    color: var(--dark-blue);
  }
`;
export const ConfirmButton = styled(ButtonCommon)`
  background-color: var(--dark-blue);
  color: var(--white);
  font-size: var(--text-3xl);
  width: fit-content;
  margin: 0 auto;
  padding: 1.25rem 4rem;
  border-radius: var(--roundedSmall);
  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

export const MergeInformationSection = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  svg {
    cursor: pointer;
  }
`
export const MergeInformation = styled.div`
  position: absolute;
  bottom: 0;
  transform: translate(0,100%);
  right: 100%;
  background: rgba(0,0,0 , 0.75);
  width : 20rem;
  height: fit-content;
  padding: 1rem 2rem;
  color : var(--white);
  border-radius : var(--roundedSmall) 0 var(--roundedSmall) var(--roundedSmall) ;
`
export const MergeInformationItem = styled.div`
    display: flex;
    gap : 0.5rem;
    font-size: var(--text-2xl);
    font-weight: 600;
    margin : .5rem 0;
`