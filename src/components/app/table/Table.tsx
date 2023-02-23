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
import { ConfirmButton, TableHeadline, TableTitle, TableWrapper, BackButton,ChatMessage,TableMain,TableOpponents,VsDividerTable,TableOthers, TableInformations,TableInformationItem,ChatFrame,ChatItem,ChatBox} from "./table.style";
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
        <TableTitle>Request</TableTitle>
        <span># {matchDetail?.id}</span>
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
        {
          matchDetail?.matchStatus >= 2
          ? "On going"
          : isOwner
          ? "Confirm"
          : "Ready"
        }
      </ConfirmButton>
    </TableWrapper>
  );
};

export default MatchTable;

