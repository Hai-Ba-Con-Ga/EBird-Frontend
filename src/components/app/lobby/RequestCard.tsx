import { IconClock, IconLocation, IconMapPin } from "@tabler/icons-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Bird } from "../../../utils/types";
import useAuth from "../../auth/useAuth";
import useApp from "../common/useApp";
import {
  BirdImage,
  BirdInformations,
  JoinButton,
  RequestBirdContainer,
  RequestBirdWrapper,
  RequestCardInfomationField,
  RequestCardWrapper,
} from "./lobby.style";
import { MatchApi } from "./match.api";
import useRequest from "./useRequest";
type ButtonContent = "View" | "Join" | "Full";
const RequestCard = ({ request }: { request: any }) => {
  const {
    auth: { userInfomation },
  } = useAuth();
  const isOwner = useMemo(
    () => userInfomation?.id == request?.hostBird?.ownerId,
    [userInfomation, request]
  );
  const { currentBird, currentRoom } = useApp({ useSelection: true });
  const isJoined = useMemo(
    () => userInfomation?.id == request?.challenger?.id,
    [request]
  );
  const [requestButtonContent, setButtonContent] = useState<ButtonContent>(
    () => "View"
  );
  useEffect(() => {
    if (isOwner) {
      setButtonContent("View");
    } else {
      if (!request.challengerBird) {
        setButtonContent("Join");
      } else {
        if (isJoined) {
          setButtonContent("View");
        } else {
          setButtonContent("Full");
        }
      }
    }
  }, [isJoined, isOwner]);
  const { joinRequest } = useRequest();
  // useEffect(() => {}, [request, userInfomation, isOwner]);
  const nav = useNavigate();
  const onJoinClickHandler = useCallback(async () => {
    if (isOwner) {
      nav("/app/lobby/table/" + request?.id);
    } else {
      if (isJoined) {
        nav("/app/lobby/table/" + request?.id);
      } else {
        joinRequest(request?.id, currentBird);
      }
    }
  }, [isOwner, currentBird]);
  return (
    <RequestCardWrapper>
      <RequestCardInfomationField>
        <IconMapPin />
        <span>{request?.place?.name || "Somewhere on earth"}</span>
      </RequestCardInfomationField>
      <RequestCardInfomationField>
        <IconClock />
        <span>{request?.requestDatetime || "00:00"}</span>
      </RequestCardInfomationField>
      <RequestBirdContainer>
        <RequestBird
          bird={request?.hostBird}
          ownerName={request?.host?.username}
          isOwner={true}
        />
        <RequestBird
          ownerName={request?.challenger?.username}
          bird={request?.challengerBird}
          isOwner={false}
        />
      </RequestBirdContainer>
      {!request?.group && (
        <JoinButton
          isOwner={isOwner}
          disabled={requestButtonContent == "Full"}
          onClick={onJoinClickHandler}
          type="button"
        >
          {requestButtonContent}
        </JoinButton>
      )}
    </RequestCardWrapper>
  );
};
const RequestBird = ({
  bird,
  isOwner,
  ownerName,
}: {
  bird?: Bird | null;
  isOwner: boolean;
  ownerName: string;
}) => {
  return (
    <RequestBirdWrapper isOwner={isOwner}>
      <BirdImage>
        {" "}
        <img
          src={
            bird
              ? "https://indiabiodiversity.org/files-api/api/get/raw/img//Pycnonotus%20jocosus/pycnonotus_jocosus_2.jpg"
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNSuIiJCjxQ5gDnadu2n7QFDrDTcHvRH53OngpEKPcPRo6KUkOMJXXreesiUn5p-zka0&usqp=CAU"
          }
          alt=""
        />
      </BirdImage>
      <BirdInformations isOwner={isOwner}>
        <h1>{bird?.name || "Empty"}</h1>
        <h1>{bird?.elo || "Empty"}</h1>
        <h1>{ownerName || "Empty"}</h1>
      </BirdInformations>
    </RequestBirdWrapper>
  );
};
export default RequestCard;
