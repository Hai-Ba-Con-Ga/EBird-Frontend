import { IconClock, IconLocation, IconMapPin } from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
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

const RequestCard = ({ request }: { request: any }) => {
  const {
    auth: { userInfomation },
  } = useAuth();
  const [isOwner, setIsOwner] = useState(
    () => userInfomation?.id == request?.hostBird?.ownerId
  );
  console.log(request);
  
  const {joinRequest} = useRequest();
  useEffect(() => {
    setIsOwner(userInfomation?.id == request?.hostBird?.ownerId);
  }, [request, userInfomation]);
  const nav = useNavigate();
  const onJoinClickHandler = useCallback(async () => {
    if (isOwner) {
        nav("/app/lobby/table/" + request?.id);
    } else {
        joinRequest(request?.id)
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
        <span>{request?.matchDatetime || "00:00"}</span>
      </RequestCardInfomationField>
      <RequestBirdContainer>
        <RequestBird bird={request?.matchBirdList?.[0]?.bird} isOwner={true} />
        <RequestBird bird={request?.matchBirdList?.[1]?.bird} isOwner={false} />
      </RequestBirdContainer>
      <JoinButton isOwner={isOwner} onClick={onJoinClickHandler} type="button">
        {isOwner ? "View" : "Join"}
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
