import React, { useEffect, useMemo, useState } from "react";

import { IconMapPin, IconClock } from "@tabler/icons-react";
import useAuth from "../../../auth/useAuth";
import useModal from "../../../common/modal/useModal";
import { MatchApi } from "../../lobby/match.api";
import {
	BirdResult,
	BirdResultWrapper,
	MatchCardWrapper,
	MatchInformationField,
	MatchInformationSection,
	MatchStatusSpan,
	VersusDivider,
} from "../../match/match.style";
import { MatchStatus } from "../../../../utils/types";
import { RequestBirdContainer } from "../../lobby/lobby.style";
import { MatchCardBird } from "../../match/MatchCard";
import UpdateResultForm from "../../../common/form/UploadResultForm";
import styled from "styled-components";
import { ButtonCommon } from "../../../common/button/Button.style";

const HistoryMatchCard = ({ match }: { match?: any }) => {
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
			matchDetail?.matchDetails?.[0]?.beforeElo,
		[matchDetail]
	);
	const secondBirdEloChange = useMemo(
		() =>
			matchDetail?.matchDetails?.[1]?.afterElo -
			matchDetail?.matchDetails?.[1]?.beforeElo,
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
						<span>{matchDetail?.matchDatetime || "00:00"}</span>
					</MatchInformationField>
				</div>
				<MatchStatusSpan status={MatchStatus.During}>
					{matchDetail?.matchStatus}
				</MatchStatusSpan>
			</MatchInformationSection>
			<RequestBirdContainer>
				<BirdResultWrapper>
					<MatchCardBird bird={matchDetail?.matchDetails?.[0]?.bird} isOwner />
					<BirdResult result={firstBirdEloChange > 0}>
						{firstBirdEloChange}
					</BirdResult>
				</BirdResultWrapper>
				<VersusDivider>vs</VersusDivider>
				<BirdResultWrapper>
					<MatchCardBird
						bird={matchDetail?.matchDetails?.[1]?.bird}
						isOwner={false}
					/>
					<BirdResult result={secondBirdEloChange > 0}>
						{secondBirdEloChange}
					</BirdResult>
				</BirdResultWrapper>
			</RequestBirdContainer>
		</MatchCardWrapper>
	);
};

export default HistoryMatchCard;

// export const MatchCardBird = ({
// 	isOwner,
// 	bird,
// }: {
// 	bird: any;
// 	isOwner: boolean;
// }) => {
// 	return (
// 		<RequestBirdWrapper isOwner={isOwner}>
// 			<BirdMatchImage>
// 				<img
// 					src="https://thucung.farmvina.com/wp-content/uploads/2019/12/chao-mao-hot-hay.jpg"
// 					alt=""
// 					srcSet="https://thucung.farmvina.com/wp-content/uploads/2019/12/chao-mao-hot-hay.jpg"
// 				/>
// 			</BirdMatchImage>
// 			<BirdMatchInformation isOwner={isOwner}>
// 				<h1>{bird?.name || "Louis Vuitton"}</h1>
// 				<h1>{bird?.elo || "0"}</h1>
// 				<h1>{"Chao mao"}</h1>
// 			</BirdMatchInformation>
// 		</RequestBirdWrapper>
// 	);
// };

const UpdateResultButton = styled(ButtonCommon)`
	padding: 1rem 2rem;
	color: var(--white);
	background-color: var(--dark-blue);
`;
