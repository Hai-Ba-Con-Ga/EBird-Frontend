import {
	IconChevronLeft,
	IconCircleX,
	IconClock,
	IconDoorExit,
	IconMapPin,
	IconRefresh,
	IconSend,
} from "@tabler/icons-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../auth/useAuth";
import useGoogleMap from "../../common/map/useGoogleMap";
import { MatchApi } from "../lobby/match.api";
import useRequest from "../lobby/useRequest";
import TableInformation from "./TableInformation";
import {
	BackButton,
	ChatBox,
	ChatFrame,
	ChatItem,
	ChatMessage,
	ConfirmButton,
	TableHeadline,
	TableInformationItem,
	TableInformations,
	TableMain,
	TableOpponents,
	TableOthers,
	TableTitle,
	TableWrapper,
	VsDividerTable,
} from "./table.style";
import TableBird from "./TableBird";
import TableChat from "./TableChat";
import { Chip } from "@mui/material";
import { RequestApi } from "../lobby/request.api";
import { RequestStatus } from "../../../utils/types";
import { useRecoilValue } from "recoil";
import useSocket from "../../common/socket/useChatSocket";
import { HubConnection } from "@microsoft/signalr";
import axiosClient from "../../../api/axiosClient";
import useLoading from "../../useLoading";
export const MatchTable = () => {
	const { id } = useParams();
	const {
		auth: { userInfomation },
	} = useAuth();
	const { closeLoading, openLoading } = useLoading();
	const [isMerged, setIsMerged] = useState<boolean>(false);
	const [requestDetail, setDetail] = useState<any>(null);
	const isOwner = useMemo(
		() => userInfomation?.id == requestDetail?.host?.id,
		[requestDetail]
	);
	const { getRequestDetail } = useRequest();

	const nav = useNavigate();
	useEffect(() => {
		getRequestDetail(id ?? "").then((data) => setDetail(data));
	}, [id]);
	//=================================================== CHAT
	const [chatRoomId, setChatRoom] = useState<string>("");
	const [messages, setMessages] = useState<any[]>([]);
	// PROTOTYPE typeChatRoom  : Request, Room , Group
	const createChatRoom = useCallback(async () => {
		if (id) {
			const url = "/chat-room";
			const res = await axiosClient.post(url, {
				name: "chat-room",
				referenceId: id,
				typeChatRoom: "Request",
			});
			return res.data.data;
		}
	}, [id]);
	useEffect(() => {
		createChatRoom().then((chatRoomId) => {
			if (chatRoomId) {
				console.log("CHAT ROOM CREATED : ", chatRoomId);
			}
		});
	}, [id]);
	const socket = useSocket({
		host: "https://wyvernpserver.tech",
		path: "/hub/chat",
		params: {
			userId: userInfomation?.id,
			referenceId: id,
		},
	});
	useEffect(() => {
		socket?.start();
		socket?.on("UserActive", (...params) => {
			// console.log("New commer ", params);
		});
		socket?.on("NewMessage", (...params) => {
			// console.log("New message ", params);
			const message = {
				user: `${params[0]?.firstName} ${params[0]?.lastName}`,
				message: params[1].content,
			};
			pushMessage(message);
		});
	}, [socket]);
	const pushMessage = useCallback(
		(msg: any) => {
			setMessages((old) => [...old, msg]);
		},
		[messages]
	);
	useEffect(() => {
		console.log("MESSAGES = ", messages);
	}, [messages]);
	// *** hanler *//
	const count = useRef(1);
	useEffect(() => {
		console.log("RERENDER", ++count.current);
	}, []);
	useEffect(() => {
		console.log(requestDetail);

		if (requestDetail?.status == RequestStatus.Closed) {
			toast.warning("This request has been closed! Check your at your matches");
			nav("/app/match");
		}
	}, [requestDetail]);
	const handleConfirmClick = useCallback(async () => {
		if (isOwner) {
			if (!requestDetail?.isReady) {
				toast.error("Your opponent is not ready");
				return;
			}
			const res = await MatchApi.createMatch({
				requestId: requestDetail?.id,
				userId: userInfomation?.id,
			});
			if (res.success) {
				toast.success(
					"Match is confirmed! Have fun. Remember to update result..."
				);
				nav("/app/match");
			} else {
				toast.error("Your opponent is not ready yet!");
			}
		} else {
			const result = await RequestApi.requestReady(id as string);
			if (result) {
				getRequestDetail(id ?? "").then((data) => setDetail(data));
				toast.success("Ready for the match. Wait for host confirm");
			} else {
				console.error("Error :))) ");
			}
		}
	}, [isOwner, requestDetail]);
	return (
		<TableWrapper>
			<TableHeadline>
				<BackButton onClick={() => nav("/app/lobby")}>
					<IconChevronLeft color="var(--dark-green)" />
				</BackButton>
				<TableTitle>Request</TableTitle>
				<Chip
					component={"span"}
					label={"#" + requestDetail?.number}
					color={"success"}
					style={{ fontWeight: 600, fontSize: "var(--text-xl)" }}
				/>
				<button
					type="button"
					onClick={() =>
						getRequestDetail(id ?? "").then((data) => setDetail(data))
					}
				>
					<IconRefresh color="var(--dark-blue)" />
				</button>
				{!isOwner && (
					<button
						type="button"
						onClick={async () => {
							if (id) {
								const res = await RequestApi.leaveRequest(id);
								if (res.success) {
									nav("/app/lobby");
								}
							}
						}}
					>
						<IconDoorExit color="var(--dark-blue)" />
					</button>
				)}
				{isOwner && (
					<button
						type="button"
						onClick={async () => {
							if (id) {
								const res = await RequestApi.cancelRequest(id);
								if (res.success) {
									nav("/app/lobby");
								}
							}
						}}
					>
						<IconCircleX color="var(--dark-blue)" />
					</button>
				)}
			</TableHeadline>
			<TableMain>
				<TableOpponents>
					<TableBird bird={requestDetail?.hostBird as any} />
					<VsDividerTable>Vs</VsDividerTable>
					<TableBird
						kickHandler={async () => {
							if (requestDetail?.challenger?.id) {
								openLoading();
								const res = await RequestApi.kickFromRequest(
									requestDetail?.id,
									requestDetail?.challenger?.id
								);
								if (res.success) {
									getRequestDetail(id ?? "").then((data) => setDetail(data));
								}
								closeLoading();
							}
						}}
						kickable={isOwner}
						bird={requestDetail?.challengerBird as any}
					/>
				</TableOpponents>
				<TableInformation
					request={requestDetail}
					reloadCallback={() =>
						getRequestDetail(id ?? "").then((data) => setDetail(data))
					}
				/>
				<TableChat
					messages={messages}
					handleSendMessage={(msg) => {
						console.log(userInfomation?.id + " Send message : " + msg);

						socket?.send("SendMessage", msg);
					}}
				/>
			</TableMain>
			<ConfirmButton
				type="button"
				disabled={!isOwner && requestDetail?.isReady}
				onClick={handleConfirmClick}
			>
				{isOwner ? "Confirm" : requestDetail?.isReady ? "Waiting" : "Ready"}
			</ConfirmButton>
		</TableWrapper>
	);
};

export default MatchTable;
