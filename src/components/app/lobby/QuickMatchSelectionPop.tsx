import { IconClock, IconMapPin } from "@tabler/icons-react";
import React, { useEffect, useMemo, useState } from "react";
import { Bird } from "../../../utils/types";
import { BirdApi } from "../profile/bird/bird.api";
import {
	BirdImage,
	BirdInformations,
	ListSelections,
	QuickMatchSelectHeader,
	QuickMatchSelectWrapper,
	RequestBirdContainer,
	RequestBirdWrapper,
	RequestCardInfomationField,
	RequestCardWrapper,
} from "./lobby.style";
import RequestCard from "./RequestCard";

type Props = {
	matchedRequests: any[];
	selectRequestToMerge: (request: any) => void;
};

const QuickMatchSelectionPop = ({
	matchedRequests,
	selectRequestToMerge,
}: Props) => {
	return (
		<QuickMatchSelectWrapper>
			<QuickMatchSelectHeader>Matched Result</QuickMatchSelectHeader>
			<ListSelections>
				{matchedRequests?.map((request) => {
					request.group = {};
					return (
						<QuickMatchCard
							handleClick={() => selectRequestToMerge?.(request)}
							request={request}
							key={request?.id}
						/>
					);
				})}
			</ListSelections>
		</QuickMatchSelectWrapper>
	);
};
const QuickMatchCard = ({
	request,
	handleClick,
}: {
	request: any;
	handleClick: () => void;
}) => {
	return (
		<RequestCardWrapper
			onClick={handleClick}
			style={{ borderColor: "var(--dark-blue)", cursor: "pointer" }}
		>
			<RequestCardInfomationField style={{ color: "var(--dark-blue)" }}>
				<IconMapPin />
				<span>{request?.place?.name || "Somewhere on earth"}</span>
			</RequestCardInfomationField>
			<RequestCardInfomationField style={{ color: "var(--dark-blue)" }}>
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
	const [birdDetail, setDetail] = useState<Bird>();
	useEffect(() => {
		if (bird) {
			BirdApi.getBirdDetail(bird?.id ?? "").then((res) => setDetail(res.data));
		}
	}, [bird]);
	const birdAvatar = useMemo(() => {
		if (birdDetail?.id) {
			if (
				birdDetail?.resourceList?.length > 0 &&
				birdDetail?.resourceList[0].dataLink
			) {
				return birdDetail.resourceList[0].dataLink;
			} else {
				return "https://indiabiodiversity.org/files-api/api/get/raw/img//Pycnonotus%20jocosus/pycnonotus_jocosus_2.jpg";
			}
		} else {
			return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNSuIiJCjxQ5gDnadu2n7QFDrDTcHvRH53OngpEKPcPRo6KUkOMJXXreesiUn5p-zka0&usqp=CAU";
		}
	}, [birdDetail]);
	return (
		<RequestBirdWrapper isOwner={isOwner}>
			<BirdImage>
				{" "}
				<img src={birdAvatar} alt="" />
			</BirdImage>
			<BirdInformations isOwner={isOwner} style={{ color: "var(--dark-blue)" }}>
				<h1>{bird?.name || "Empty"}</h1>
				<h1>{bird?.elo || "Empty"}</h1>
				<h1>{ownerName || "Empty"}</h1>
			</BirdInformations>
		</RequestBirdWrapper>
	);
};
export default QuickMatchSelectionPop;
