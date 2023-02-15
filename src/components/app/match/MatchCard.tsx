import React from "react";
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

const MatchCard = () => {
  return (
    <MatchCardWrapper>
      <MatchInformationSection>
        <div className="">
          <MatchInformationField>
            <IconMapPin />
            <span>{"" || "Somewhere on earth"}</span>
          </MatchInformationField>
          <MatchInformationField>
            <IconClock />
            <span>{"" || "00:00"}</span>
          </MatchInformationField>
        </div>
        <MatchStatusSpan status={MatchStatus.During}>On Going</MatchStatusSpan>
      </MatchInformationSection>
      <RequestBirdContainer>
        <BirdResultWrapper>
          <MatchCardBird isOwner />
          <BirdResult result>Win</BirdResult>
        </BirdResultWrapper>
        <VersusDivider>vs</VersusDivider>
        <BirdResultWrapper>
          <MatchCardBird isOwner={false} />
          <BirdResult result={false}> Lose</BirdResult>
        </BirdResultWrapper>
      </RequestBirdContainer>
    </MatchCardWrapper>
  );
};

export default MatchCard;

export const MatchCardBird = ({ isOwner }: { isOwner: boolean }) => {
  return (
    <RequestBirdWrapper isOwner={isOwner}>
      <BirdMatchImage>
        <img
          src="https://source.unsplash.com/random"
          alt=""
          srcSet="https://source.unsplash.com/random"
        />
      </BirdMatchImage>
      <BirdMatchInformation isOwner={isOwner}>
        <h1>Louis Vuitton</h1>
        <h1>ELO</h1>
        <h1>Owner</h1>
      </BirdMatchInformation>
    </RequestBirdWrapper>
  );
};
