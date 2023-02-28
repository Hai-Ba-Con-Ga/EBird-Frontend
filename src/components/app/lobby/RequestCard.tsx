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
  useEffect(() => {
    console.log("REQUEST CARD", request);
  }, [request, userInfomation, isOwner]);
  const nav = useNavigate();
  const onJoinClickHandler = useCallback(async () => {
    if (isOwner) {
      nav("/app/lobby/table/" + request?.id);
    } else {
      if (isJoined) {
        nav("/app/lobby/table/" + request?.id);
      } else {
        joinRequest(request?.id);
      }
    }
  }, [isOwner]);
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
        <RequestBird bird={request?.hostBird} isOwner={true} />
        <RequestBird bird={request?.challengerBird} isOwner={false} />
      </RequestBirdContainer>
      <JoinButton
        isOwner={isOwner}
        disabled={requestButtonContent == "Full"}
        onClick={onJoinClickHandler}
        type="button"
      >
        {requestButtonContent}
      </JoinButton>
    </RequestCardWrapper>
  );
};
const RequestBird = ({
  bird,
  isOwner,
}: {
  bird?: Bird | null;
  isOwner: boolean;
}) => {
  return (
    <RequestBirdWrapper isOwner={isOwner}>
      <BirdImage>
        {" "}
        <img
          src={
            "https://us.123rf.com/450wm/pandavector/pandavector1901/pandavector190105281/126044187-isolated-object-of-avatar-and-dummy-symbol-collection-of-avatar-and-image-stock-symbol-for-web-.jpg?ver=6"
          }
          alt=""
          srcSet="https://source.unsplash.com/random"
        />
      </BirdImage>
      <BirdInformations isOwner={isOwner}>
        <h1>{bird?.name || "NaN"}</h1>
        <h1>{bird?.elo || "NaN"}</h1>
        <h1>{"Owner"}</h1>
      </BirdInformations>
    </RequestBirdWrapper>
  );
};
export default RequestCard;
