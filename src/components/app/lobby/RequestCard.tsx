import {
	IconBrandTwitter,
	IconClock,
	IconLocation,
	IconMapPin,
	IconStar,
	IconUser,
} from "@tabler/icons-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Bird } from "../../../utils/types";
import useAuth from "../../auth/useAuth";
import useApp from "../common/useApp";
import { BirdApi } from "../profile/bird/bird.api";
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
	const { currentBird, currentRoom } = useApp({ useSelection: false });
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
				<span>
					{request?.requestDatetime?.split("T")?.[0]}{" "}
					{new Date(Date.parse(request?.requestDatetime)).getHours() === 0
						? "Morning"
						: "Afternoon"}
				</span>
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
			<BirdInformations isOwner={isOwner}>
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
							<span>{ownerName || "Empty"}</span>
							<IconUser fill="var(--color-coffee)" />
						</>
					) : (
						<>
							<IconUser fill="var(--color-coffee)" />
							<span>{ownerName || "Empty"}</span>
						</>
					)}
				</h1>
			</BirdInformations>
		</RequestBirdWrapper>
	);
};
export default RequestCard;
