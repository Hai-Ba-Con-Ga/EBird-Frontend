import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import { Bird, RequestTime } from "../../../utils/types";
import { CreateRequestParams } from "../../../utils/types/api/params";
import authAtom from "../../auth/AuthAtom";
import useAuth from "../../auth/useAuth";
import useModal from "../../common/modal/useModal";
import AppAtom from "../common/app.atom";
import useApp from "../common/useApp";
import { RequestApi } from "./request.api";
import CreateRequestForm from "../../common/form/CreateRequestForm";
import { useNavigate } from "react-router-dom";
import { PlaceApi } from "../../common/map/place.api";
import { MatchApi } from "./match.api";
import useSidebar from "../../common/sidebar/useSidebar";
import loadingAtom from "../../LoadingAtom";
import QuickMatchSelectionPop from "./QuickMatchSelectionPop";

const useRequest = (init?: boolean) => {
	const auth = useRecoilValue(authAtom);
	const appState = useRecoilValue(AppAtom);
	const { currentBird, currentRoom } = useApp({ useSelection: false });
	const { openModal, closeModal } = useModal();
	const [requests, setRequests] = useState<any[]>([]);
	const { getListRelatedRequests } = useSidebar({ init: false });
	const [loading, setLoading] = useRecoilState(loadingAtom);
	const nav = useNavigate();
	const createRequest = useCallback(
		async (data: CreateRequestFormValues) => {
			const { userInfomation } = auth;
			const place = data.location;
			const params: CreateRequestParams = {
				//TODO : add noon or morning
				requestDatetime: data.date,
				hostId: userInfomation?.id,
				hostBirdId: data.currentBirdId || (appState.currentBird?.id as string),
				roomId: appState.currentRoom?.id as string,
				groupId: data?.groupId,
				place,
			};

			const result = await RequestApi.createRequest(params);
			console.log("Create match result = ", result);
			if (result.success) {
				toast.success(
					"Create match successfully! Refresh list manually please"
				);
				
				// TODO : Refresh list manually || socket
				getAllRequest();
				getListRelatedRequests();
				closeModal();
			} else {
				toast.error(
					result.message || "Create request failed! Check again later"
				);
			}
		},
		[appState, auth]
	);
	useEffect(() => {
		console.log("App state changed IN REQUEST HOOK", appState);
	}, [appState]);
	const createRequestOpenModal = useCallback(
		(groupId?: string) => {
			openModal({
				closable: true,
				component: (
					<CreateRequestForm
						options={{
							mapSize: "default",
							selectBird: true,
							isUpdate: false,
						}}
						handleCreateRequest={(data) => {
							if (groupId) {
								data.groupId = groupId;
							}
							console.log("TEST BUG KHUYA, handler", data);

							createRequest(data);
						}}
					/>
				),
				payload: null,
			});
		},
		[appState, auth]
	);
	const getAllRequest = useCallback(() => {
		// TODO: wait for BFCS-153
		setLoading({ ...loading, isShown: true });
		RequestApi.getAllRequest({ roomId: currentRoom?.id as string })
			.then((response) => setRequests(response.data))
			.then(() => setLoading({ ...loading, isShown: false }));
	}, [currentRoom, init]);
	useEffect(() => {
		if (init) {
			RequestApi.getAllRequest({ roomId: currentRoom?.id as string }).then(
				(response) => setRequests(response.data)
			);
		}
	}, [currentRoom, init]);
	/** Join request */
	const joinRequest = useCallback(
		async (requestId: string, bird?: any) => {
			console.log("JOIN RQUEST : ", bird);
			if (bird) {
				const result = await RequestApi.joinRequest({
					challengerBirdId: bird.id,
					requestId,
				});
				if (result.success) {
					nav("/app/lobby/table/" + requestId);
					toast.success("Joined successfully");
				} else {
					toast.error(result.message);
				}
			} else {
				toast.error("Please select a bird to join");
			}
		},
		[appState]
	);
	/** Get request detail/table */
	const getRequestDetail = useCallback(async (requestId: string) => {
		setLoading({ ...loading, isShown: true });

		const response = await RequestApi.getRequestDetail(requestId).finally(() =>
			setLoading({ ...loading, isShown: false })
		);
		if (response.success) {
			return response.data;
		} else {
			toast.error("This request did not exist no more!");
			nav("/app/lobby");
		}
	}, []);

	/** Update Request */
	const updateRequest = useCallback(
		async (
			params: CreateRequestFormValues,
			request: any,
			reloadCallback: () => void
		) => {
			const requestParams: {
				placeId: string;
				hostBirdId: string;
				requestDatetime: string;
				requestId: string;
			} = {
				placeId: request.place.id,
				hostBirdId: params.currentBirdId,
				requestDatetime: params?.date?.toString() ?? request?.requestDatetime,
				requestId: request.id,
			};
			console.log(
				"Not Same",
				isSamePlace({ place: params.location, place2: request.place })
			);

			if (!isSamePlace({ place: params.location, place2: request.place })) {
				const respData = await PlaceApi.createPlace(params.location);
				requestParams.placeId = respData.data;
				console.log("location", respData);
			}
			requestParams.requestDatetime = params.date.toLocaleString();
			const updateResult = await RequestApi.updateRequest(requestParams);
			if (updateResult.success) {
				toast.success("Update information successfully");
			} else {
				toast.error("Error updating information");
			}
			reloadCallback();
		},
		[]
	);
	const selectMergeRequest = useCallback(
		async (listRequestId: any[], targetId: string) => {
			for await (const requestId of listRequestId) {
				const res = await RequestApi.requestSelfCheck({
					hostRequestID: targetId,
					challengerRequestID: requestId,
				});
				if (res.data) return requestId;
			}
			return null;
		},
		[]
	);
	const fetchRequestByIds = useCallback(async (ids: string[]) => {
		const requests = await Promise.all(
			ids.map((id) => RequestApi.getRequestDetail(id).then((res) => res.data))
		);
		return requests;
	}, []);
	/* Quick match */
	const quickMatchRequestModal = useCallback(() => {
		openModal({
			closable: true,
			component: (
				<CreateRequestForm
					options={{
						mapSize: "default",
						selectBird: true,
						isUpdate: false,
					}}
					handleCreateRequest={async (data) => {
						const { userInfomation } = auth;
						const place = data.location;
						const params: CreateRequestParams = {
							requestDatetime: data.date,
							hostId: userInfomation?.id,
							hostBirdId:
								data.currentBirdId || (appState.currentBird?.id as string),
							roomId: appState.currentRoom?.id as string,
							place,
						};
						console.log("Quickmatch", data);

						const result = await RequestApi.createRequest(params);
						console.log("Result request", result);

						if (result.success) {
							const requestId = result.data;
							const matchedMatches = (
								await RequestApi.quickMatchRequest(
									requestId,
									appState.currentRoom?.id as string
								)
							).data;
							if (matchedMatches.length > 0) {
								const requests = await fetchRequestByIds(matchedMatches);
								console.log("FETCH RQUEST", requests);
								closeModal();
								setTimeout(
									() =>
										openModal({
											payload: "",
											closable: true,
											component: (
												<QuickMatchSelectionPop
													selectRequestToMerge={async (request) => {
														console.log("selected request", request);
														if (request?.id) {
															const mergeData = await RequestApi.mergeRequest({
																hostRequestId: request?.id,
																challengerRequestId: requestId,
															});
															if (mergeData.success) {
																nav("/app/lobby/table/" + mergeData.data);
																closeModal();
															}
														} else {
															toast.warning(
																"Not found any matches for request"
															);
														}
													}}
													matchedRequests={requests}
												></QuickMatchSelectionPop>
											),
										}),
									0
								);
								// const matchedId = await selectMergeRequest(
								//   matchedMatches,
								//   requestId
								// );
								// console.log("MATCHED ID", matchedId);

								// if (matchedId) {
								//   const mergeData = await RequestApi.mergeRequest({
								//     hostRequestId: requestId,
								//     challengerRequestId: matchedId,
								//   });
								//   if (mergeData.success) {
								//     nav("/app/lobby/table/" + mergeData.data);
								//     closeModal();
								//   }
								// } else {
								//   toast.warning("Not found any matches for request");
								// }
							} else {
								toast.warning("Not found any matches for request");
							}
						} else {
							toast.error("Create request failed");
						}
					}}
				/>
			),
			payload: null,
		});
	}, [appState, auth]);

	/** Confirm request -> create match  */
	const confirmRequest = useCallback(
		async (requestId: string) => {
			const response = await MatchApi.createMatch({ requestId });
			if (response.success) {
				console.log(response.data);
				nav("/app/match");
			} else {
				toast.error(response.message);
			}
		},
		[auth]
	);
	return {
		createRequest,
		createRequestOpenModal,
		getAllRequest,
		requests,
		joinRequest,
		getRequestDetail,
		updateRequest,
		quickMatchRequestModal,
		confirmRequest,
	};
};
function isSamePlace({ place, place2 }: any) {
	console.log("Place 1", place);
	console.log("Place 2", place2);

	return (
		place.latitude == place2.latitude && place.longitude == place2.longitude
	);
}

type CreateRequestFormValues = {
	date: Date | string;
	time: RequestTime;
	location: {
		name: string;
		address: string;
		longitude: number;
		latitude: number;
	};
	currentBirdId: string;
	groupId: string;
};
export default useRequest;
