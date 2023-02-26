import { IconClock, IconLocation, IconMapPin } from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Bird, MatchRequest } from "../../../utils/types";
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
} from "../lobby/lobby.style";
import { MatchApi } from "../lobby/match.api";

const RequestCard = ({ request }: { request: any }) => {
  const {
    auth: { userInfomation },
  } = useAuth();
  const [isOwner, setIsOwner] = useState(
    () => userInfomation?.id == request?.hostId
  );
  const { currentRoom, currentBird } = useApp();

  useEffect(() => {
    setIsOwner(userInfomation?.id == request?.hostId);
  }, [request, userInfomation]);
  const nav = useNavigate();
  const onJoinClickHandler = useCallback(async () => {
    if (isOwner) {
      console.log("VIEW TABLE" + request?.id);
      nav("/app/lobby/table/" + request?.id);
    } else {
      console.log("JOIN TABLE");
      // TODO : call api join
      if (currentBird) {
        console.log(currentBird);

        const response = await MatchApi.joinMatch(request?.id, {
          birdChallengerId: currentBird?.id,
        });
        if (response.success) {
          nav("/app/lobby/table/" + request?.id);
          toast.success("Join table success");
        } else {
          toast.error("Cannot join, refresh list and check again");
        }
      } else {
        toast.error("Please select bird");
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
