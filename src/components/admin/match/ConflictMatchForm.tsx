import { Box, Radio, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { MatchStatus } from "../../../utils/types";
import { RequestBirdContainer } from "../../app/lobby/lobby.style";
import { MatchApi } from "../../app/lobby/match.api";
import {
	BirdResult,
	BirdResultWrapper,
	MatchCardWrapper,
	MatchInformationField,
	MatchInformationSection,
	MatchStatusSpan,
	VersusDivider,
} from "../../app/match/match.style";
import { MatchCardBird } from "../../app/match/MatchCard";
import { IconMapPin, IconClock } from "@tabler/icons-react";
import { ButtonCommon } from "../../common/button/Button.style";
import styled from "styled-components";
import useModal from "../../common/modal/useModal";
import { toast } from "react-toastify";
const ConflictMatchForm = ({ matchId }: { matchId: string }) => {
	const [matchDetail, setMatchDetail] = useState<any>();
	const { closeModal } = useModal();
	useEffect(() => {
		if (matchId) {
			MatchApi.getMatchDetail(matchId).then((res) => setMatchDetail(res.data));
		}
	}, [matchId]);
	console.log(matchDetail);
	const [selected, setWin] = useState<string>("");
	const resultLabelFirst = useMemo(() => {
		if (selected) {
			return selected === matchDetail?.matchDetails?.[0]?.bird?.id
				? "Win"
				: "Lose";
		}
		return "Draw";
	}, [selected]);
	const resultLabelSecond = useMemo(() => {
		if (selected) {
			return selected === matchDetail?.matchDetails?.[1]?.bird?.id
				? "Win"
				: "Lose";
		}
		return "Draw";
	}, [selected]);
	const updateParams = useMemo(() => {
		return {
			matchId: matchDetail?.id,
			winBirdId: selected
				? selected == matchDetail?.matchDetails?.[0]?.bird?.id
					? matchDetail?.matchDetails?.[0]?.bird?.id
					: matchDetail?.matchDetails?.[1]?.bird?.id
				: null,
			loseBirdId: selected
				? selected == matchDetail?.matchDetails?.[1]?.bird?.id
					? matchDetail?.matchDetails?.[0]?.bird?.id
					: matchDetail?.matchDetails?.[1]?.bird?.id
				: null,
		};
	}, [selected, matchDetail]);
	return (
		<Box
			component={"div"}
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				padding: "2rem 2rem",
			}}
		>
			<Typography
				fontWeight={600}
				fontSize={"var(--text-4xl)"}
				color="var(--dark-blue)"
				style={{ margin: "1.5rem 0" }}
			>
				Conflict Match
			</Typography>
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
				</MatchInformationSection>
				<RequestBirdContainer>
					<BirdResultWrapper>
						<Typography
							textAlign={"center"}
							fontSize={"var(--text-2xl)"}
							fontWeight={600}
							color={"var(--medium-gray)"}
						>
							{matchDetail?.matchDetails?.[0]?.result}
						</Typography>
						<MatchCardBird
							bird={matchDetail?.matchDetails?.[0]?.bird}
							isOwner
						/>
						<BirdResult result>
							<Radio
								name="result"
								checked={selected === matchDetail?.matchDetails?.[0]?.bird?.id}
								onClick={() => setWin(matchDetail?.matchDetails?.[0]?.bird?.id)}
							/>
							{resultLabelFirst}
						</BirdResult>
						<Box component={"div"}>
							<Typography fontWeight={600} textAlign={"center"}>
								Attachment
							</Typography>
							{matchDetail?.matchDetails?.[1]?.resourceResponses.map(
								(rs: any, i: any) => (
									<a
										target={"_blank"}
										rel="noreferrer"
										style={{
											display: "block",
											padding: "0.5rem",
											backgroundColor: "var(--dark-green)",
											color: "var(--color-coffee)",
											fontWeight: 600,
											margin: "0.5rem 1rem",
										}}
										href={rs?.dataLink}
										key={rs?.id}
									>{`Proof ${i + 1}`}</a>
								)
							)}
						</Box>
					</BirdResultWrapper>
					<VersusDivider>vs</VersusDivider>
					<BirdResultWrapper>
						<Typography
							textAlign={"center"}
							fontSize={"var(--text-2xl)"}
							fontWeight={600}
							color={"var(--medium-gray)"}
						>
							{matchDetail?.matchDetails?.[1]?.result}
						</Typography>
						<MatchCardBird
							bird={matchDetail?.matchDetails?.[1]?.bird}
							isOwner={false}
						/>
						<BirdResult result={false}>
							<Radio
								name="result"
								checked={selected === matchDetail?.matchDetails?.[1]?.bird?.id}
								onClick={() => setWin(matchDetail?.matchDetails?.[1]?.bird?.id)}
							/>
							{resultLabelSecond}
						</BirdResult>
						<Box component={"div"}>
							<Typography fontWeight={600} textAlign={"center"}>
								Attachment
							</Typography>
							{matchDetail?.matchDetails?.[0]?.resourceResponses.map(
								(rs: any, i: any) => (
									<a
										target={"_blank"}
										rel="noreferrer"
										style={{
											display: "block",
											padding: "0.5rem",
											backgroundColor: "var(--dark-green)",
											color: "var(--color-coffee)",
											fontWeight: 600,
											margin: "0.5rem 1rem",
										}}
										href={rs?.dataLink}
										key={rs?.id}
									>{`Proof ${i}`}</a>
								)
							)}
						</Box>
					</BirdResultWrapper>
				</RequestBirdContainer>
				<UpdateResultButton
					type="button"
					onClick={async () => {
						console.log("solved", updateParams);
						MatchApi.updateConflict(updateParams).then((res) => {
							console.log("Updateresult", res);
							if (res.success) {
								closeModal();
							} else {
								toast.error("Error updating conflict");
							}
						});
					}}
				>
					Update result
				</UpdateResultButton>
			</MatchCardWrapper>
		</Box>
	);
};

export default ConflictMatchForm;
const UpdateResultButton = styled(ButtonCommon)`
	padding: 1rem 2rem;
	color: var(--white);
	background-color: var(--dark-blue);
`;
