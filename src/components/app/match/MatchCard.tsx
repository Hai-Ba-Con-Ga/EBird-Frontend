import React, { useEffect, useState } from "react";
import {
  BirdImage,
  BirdInformations,
  RequestBirdContainer,
  RequestBirdWrapper,
  RequestCardInfomationField,
} from "../lobby/lobby.style";
import {
  BirdMatchImage,
  BirdMatchInformation,
  BirdResult,
  BirdResultWrapper,
  MatchCardWrapper,
  MatchInformationField,
  MatchInformationSection,
  MatchStatusSpan,
  VersusDivider,
} from "./match.style";
import { IconMapPin, IconClock } from "@tabler/icons-react";
import { MatchStatus } from "../../../utils/types";
import { MatchApi } from "../lobby/match.api";
import styled from "styled-components";
import { ButtonCommon } from "../../common/button/Button.style";
import useModal from "../../common/modal/useModal";
import UpdateResultForm from "../../common/form/UploadResultForm";
import useAuth from "../../auth/useAuth";

const MatchCard = ({ match }: { match?: any }) => {
  const [matchDetail, setDetail] = useState<any>(null);
  const {
    auth: { userInfomation },
  } = useAuth();
  const { openModal } = useModal();
  useEffect(() => {
    MatchApi.getMatchDetail(match?.id as string)
      .then((res) => res.data)
      .then((match) => setDetail(match));
    console.log(matchDetail);
  }, [match]);
  useEffect(() => {
    console.log(matchDetail);
  }, [matchDetail]);
  return (
    <MatchCardWrapper>
      <MatchInformationSection>
        <div className="">
          <MatchInformationField>
            <IconMapPin />
            <span>{matchDetail?.place?.name || "Somewhere on earth"}</span>
          </MatchInformationField>
          <MatchInformationField>
            <IconClock />
            <span>{matchDetail?.matchDatetime || "00:00"}</span>
          </MatchInformationField>
        </div>
        <MatchStatusSpan status={MatchStatus.During}>On Going</MatchStatusSpan>
      </MatchInformationSection>
      <RequestBirdContainer>
        <BirdResultWrapper>
          <MatchCardBird bird={matchDetail?.matchDetails?.[0]?.bird} isOwner />
          <BirdResult result>
            {matchDetail?.matchDetails?.[0]?.result == "Ready" ||
            matchDetail?.matchDetails?.[0]?.result == "NotReady"
              ? "--"
              : matchDetail?.matchDetails?.[0]?.result == "Lose"
              ? "Lose"
              : matchDetail?.matchDetails?.[0]?.result == "Win"
              ? "Win"
              : "Drawn"}
          </BirdResult>
        </BirdResultWrapper>
        <VersusDivider>vs</VersusDivider>
        <BirdResultWrapper>
          <MatchCardBird
            bird={matchDetail?.matchDetails?.[1]?.bird}
            isOwner={false}
          />
          <BirdResult result={false}>
            {matchDetail?.matchDetails?.[1]?.result == "Ready" ||
            matchDetail?.matchDetails?.[1]?.result == "NotReady"
              ? "--"
              : matchDetail?.matchDetails?.[1]?.result == "Lose"
              ? "Lose"
              : matchDetail?.matchDetails?.[1]?.result == "Win"
              ? "Win"
              : "Drawn"}
          </BirdResult>
        </BirdResultWrapper>
      </RequestBirdContainer>
      <UpdateResultButton
        type="button"
        onClick={() =>
          openModal({
            payload: null,
            closable: true,
            component: (
              <UpdateResultForm
                birdId={
                  matchDetail?.matchDetails?.find(
                    (mBird: any) => mBird.bird.ownerId == userInfomation?.id
                  )?.bird?.id
                }
                matchID={match?.id}
              />
            ),
          })
        }
      >
        Update result
      </UpdateResultButton>
    </MatchCardWrapper>
  );
};

export default MatchCard;

export const MatchCardBird = ({
  isOwner,
  bird,
}: {
  bird: any;
  isOwner: boolean;
}) => {
  return (
    <RequestBirdWrapper isOwner={isOwner}>
      <BirdMatchImage>
        <img
          src="https://thucung.farmvina.com/wp-content/uploads/2019/12/chao-mao-hot-hay.jpg"
          alt=""
          srcSet="https://thucung.farmvina.com/wp-content/uploads/2019/12/chao-mao-hot-hay.jpg"
        />
      </BirdMatchImage>
      <BirdMatchInformation isOwner={isOwner}>
        <h1>{bird?.name || "Louis Vuitton"}</h1>
        <h1>{bird?.elo || "0"}</h1>
        <h1>{"Chao mao"}</h1>
      </BirdMatchInformation>
    </RequestBirdWrapper>
  );
};

const UpdateResultButton = styled(ButtonCommon)`
  padding: 1rem 2rem;
  color: var(--white);
  background-color: var(--dark-blue);
`;
