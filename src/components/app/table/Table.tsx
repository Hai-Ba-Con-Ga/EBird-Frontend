import {
  IconChevronLeft,
  IconChevronUpLeft,
  IconClock,
  IconMapPin,
  IconSend,
} from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import useAuth from "../../auth/useAuth";
import { ButtonCommon } from "../../common/button/Button.style";
import { RequestCardInfomationField } from "../lobby/lobby.style";
import { MatchApi } from "../lobby/match.api";
import { TableHeadline, TableTitle, TableWrapper } from "./table.style";
import TableBird from "./TableBird";

export const MatchTable = () => {
  const { id } = useParams();
  const [matchDetail, setDetail] = useState<any>(null);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [hostBird, setHostBird] = useState<any>(null);
  const [guestBird, setGuestBird] = useState<any>(null);
  const nav = useNavigate();
  const {
    auth: { userInfomation },
  } = useAuth();
  useEffect(() => {
    // TODO :  fetch match detail
    MatchApi.getMatchDetail(id as string)
      .then((res) => res.data)
      .then((match) => setDetail(match));
    console.log(id);
  }, [id]);
  useEffect(() => {
    console.log(matchDetail);

    if (matchDetail) {
      setIsOwner(matchDetail?.hostId == userInfomation?.id);
      matchDetail?.matchBirdList?.forEach((bird: any) => {
        if (bird?.bird?.ownerId == matchDetail?.hostId) {
          setHostBird(bird?.bird);
        } else {
          setGuestBird(bird?.bird);
        }
        // console.log(bird);
      });
      // setHostBird();
    }
  }, [matchDetail]);
  useEffect(() => {
    console.log(hostBird);
  }, [hostBird]);
  useEffect(() => {
    console.log(guestBird);
  }, [guestBird]);
  const handleConfirmClick = useCallback(async () => {
    if (isOwner) {
      console.log("Confirm implement");
      const res = await MatchApi.matchConfirm(id as string);
      if (res.success) {
        toast.success("Match is confirmed! Have fun. Remember to update...");
        nav("/app/match");
      } else {
        toast.error("Your opponent is not ready yet!");
      }
    } else {
      console.log("Ready");
      const dbCheck = await MatchApi.getMatchDetail(id as string).then(
        (res) => res.data
      );
      const birds = dbCheck?.matchBirdList?.map((bird: any) => bird?.bird);
      const guestBirdId = birds?.[1]?.id;
      console.log(dbCheck);
      console.log(birds);
      console.log(guestBirdId);

      const result = await MatchApi.matchReady({
        matchId: id as string,
        birdId: guestBirdId,
      });
      if (result) {
        toast.success("Ready for the match. Wait for host confirm");
      } else {
        console.error("Error :))) ");
      }
    }
  }, [isOwner]);
  return (
    <TableWrapper>
      <TableHeadline>
        <BackButton onClick={() => nav("/app/lobby")}>
          <IconChevronLeft color="var(--dark-green)" />
        </BackButton>
        <TableTitle>Table</TableTitle>
      </TableHeadline>
      <TableMain>
        <TableOpponents>
          <TableBird bird={hostBird as any} />
          <VsDividerTable>Vs</VsDividerTable>
          <TableBird bird={guestBird as any} />
        </TableOpponents>
        <TableOthers>
          <TableInformations>
            <TableInformationItem>
              <IconMapPin />
              <span>{matchDetail?.place?.name}</span>
            </TableInformationItem>
            <TableInformationItem>
              <IconClock />
              <span>{matchDetail?.matchDatetime}</span>
            </TableInformationItem>
          </TableInformations>
          <ChatFrame>
            <ChatBox>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolores illum accusamus iste expedita maxime at nesciunt
                  atque non vitae ad!
                </span>
              </ChatItem>
            </ChatBox>
            <ChatMessage>
              <input type="text" placeholder="Type something..." />
              <IconSend />
            </ChatMessage>
          </ChatFrame>
        </TableOthers>
      </TableMain>
      <ConfirmButton
        type="button"
        disabled={matchDetail?.matchStatus >= 2}
        onClick={handleConfirmClick}
      >
        {matchDetail?.matchStatus >= 2
          ? "On going"
          : isOwner
          ? "Confirm"
          : "Ready"}
      </ConfirmButton>
    </TableWrapper>
  );
};

export default MatchTable;

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
  height: 100%;
  margin-bottom: 3rem;
`;
export const TableOpponents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  flex: 1 1 auto;
`;

export const VsDividerTable = styled.span`
  color: vaR(--dangerous);
  font-size: var(--text-3xl);
  font-weight: 600;
`;
export const TableOthers = styled.div`
  display: flex;
  flex-direction: column;
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
