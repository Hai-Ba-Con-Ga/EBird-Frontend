import React, { useEffect, useMemo, useState } from "react";
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
import {
	IconMapPin,
	IconClock,
	IconBrandTwitter,
	IconUser,
	IconStar,
} from "@tabler/icons-react";
import { MatchStatus } from "../../../utils/types";
import { MatchApi } from "../lobby/match.api";
import styled from "styled-components";
import { ButtonCommon } from "../../common/button/Button.style";
import useModal from "../../common/modal/useModal";
import UpdateResultForm from "../../common/form/UploadResultForm";
import useAuth from "../../auth/useAuth";

const MatchCard = ({
	match,
	isView = true,
}: {
	match?: any;
	isView?: boolean;
}) => {
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
	const firstBirdEloChange = useMemo(
		() =>
			matchDetail?.matchDetails?.[0]?.afterElo -
				matchDetail?.matchDetails?.[0]?.beforeElo >
			0
				? `+${
						matchDetail?.matchDetails?.[0]?.afterElo -
						matchDetail?.matchDetails?.[0]?.beforeElo
				  }`
				: `${
						matchDetail?.matchDetails?.[0]?.afterElo -
						matchDetail?.matchDetails?.[0]?.beforeElo
				  }`,
		[matchDetail]
	);
	const secondBirdEloChange = useMemo(
		() =>
			matchDetail?.matchDetails?.[1]?.afterElo -
				matchDetail?.matchDetails?.[1]?.beforeElo >
			0
				? `+${
						matchDetail?.matchDetails?.[1]?.afterElo -
						matchDetail?.matchDetails?.[1]?.beforeElo
				  }`
				: `${
						matchDetail?.matchDetails?.[1]?.afterElo -
						matchDetail?.matchDetails?.[1]?.beforeElo
				  }`,
		[matchDetail]
	);
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
						<span>
							{matchDetail?.matchDatetime?.split(" ")?.[0]}{" "}
							{new Date(Date.parse(matchDetail?.matchDatetime)).getHours() === 0
								? "Morning"
								: "Afternoon"}
						</span>
					</MatchInformationField>
				</div>
				<MatchStatusSpan status={matchDetail?.matchStatus}>
					{matchDetail?.matchStatus}
				</MatchStatusSpan>
			</MatchInformationSection>
			<RequestBirdContainer>
				<BirdResultWrapper>
					<MatchCardBird bird={matchDetail?.matchDetails?.[0]?.bird} isOwner />
					<BirdResult result={matchDetail?.matchDetails?.[0]?.result == "Win"}>
						{matchDetail?.matchDetails?.[0]?.result == "Ready" ||
						matchDetail?.matchDetails?.[0]?.result == "NotReady"
							? "--"
							: matchDetail?.matchDetails?.[0]?.result == "Lose"
							? "Lose"
							: matchDetail?.matchDetails?.[0]?.result == "Win"
							? "Win"
							: "Drawn"}
						{matchDetail?.matchStatus === MatchStatus.Completed &&
							`(${firstBirdEloChange})`}
					</BirdResult>
				</BirdResultWrapper>
				<VersusDivider>vs</VersusDivider>
				<BirdResultWrapper>
					<MatchCardBird
						bird={matchDetail?.matchDetails?.[1]?.bird}
						isOwner={false}
					/>
					<BirdResult result={matchDetail?.matchDetails?.[1]?.result == "Win"}>
						{matchDetail?.matchDetails?.[1]?.result == "Ready" ||
						matchDetail?.matchDetails?.[1]?.result == "NotReady"
							? "--"
							: matchDetail?.matchDetails?.[1]?.result == "Lose"
							? "Lose"
							: matchDetail?.matchDetails?.[1]?.result == "Win"
							? "Win"
							: "Drawn"}
						{matchDetail?.matchStatus === MatchStatus.Completed &&
							`(${secondBirdEloChange})`}
					</BirdResult>
				</BirdResultWrapper>
			</RequestBirdContainer>
			{isView && (
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
			)}
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
	const birdAvatar = useMemo(() => {
		if (bird?.id) {
			if (bird?.resourceList?.length > 0 && bird?.resourceList[0].dataLink) {
				return bird.resourceList[0].dataLink;
			} else {
				return "https://indiabiodiversity.org/files-api/api/get/raw/img//Pycnonotus%20jocosus/pycnonotus_jocosus_2.jpg";
			}
		} else {
			return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNSuIiJCjxQ5gDnadu2n7QFDrDTcHvRH53OngpEKPcPRo6KUkOMJXXreesiUn5p-zka0&usqp=CAU";
		}
	}, [bird]);
	return (
		<RequestBirdWrapper isOwner={isOwner}>
			<BirdMatchImage>
				<img src={birdAvatar} alt="" />
			</BirdMatchImage>
			<BirdMatchInformation isOwner={isOwner}>
				<h1>
					{isOwner ? (
						<>
							<span>{bird?.name || "Empty"}</span>
							<IconBrandTwitter fill="var(--color-coffee)" />
						</>
					) : (
						<>
							<IconBrandTwitter fill="var(--color-coffee)" />
							<span>{bird?.name || "Empty"}</span>
						</>
					)}
				</h1>
				<h1>
					{isOwner ? (
						<>
							<span>{bird?.elo || "Empty"}</span>
							<IconStar fill="var(--color-coffee)" />
						</>
					) : (
						<>
							<IconStar fill="var(--color-coffee)" />
							<span>{bird?.elo || "Empty"}</span>
						</>
					)}
				</h1>
				<h1>
					{isOwner ? (
						<>
							<span>{bird?.owner?.username || "Empty"}</span>
							<IconUser fill="var(--color-coffee)" />
						</>
					) : (
						<>
							<IconUser fill="var(--color-coffee)" />
							<span>{bird?.owner?.username || "Empty"}</span>
						</>
					)}
				</h1>
			</BirdMatchInformation>
		</RequestBirdWrapper>
	);
};

const UpdateResultButton = styled(ButtonCommon)`
	padding: 1rem 2rem;
	color: var(--white);
	background-color: var(--dark-blue);
`;
