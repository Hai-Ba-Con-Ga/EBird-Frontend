import axios from "axios";
import axiosClient from "../../../api/axiosClient";
import { Response } from "../../../utils/types/api";
import {
	CreateRequestParams,
	GetAllRequestParams,
	JoinRequestParams,
} from "../../../utils/types/api/params";

//TODO : type imple
export const RequestApi = {
	createRequest: async (
		params: CreateRequestParams
	): Promise<Response<any>> => {
		const url = "/request";
		const response = await axiosClient.post(url, params);
		return response.data;
	},
	getAllRequest: async ({
		roomId,
		pagination,
	}: GetAllRequestParams): Promise<Response<any>> => {
		const url = "/request/room";
		const response = await axiosClient.get(url, {
			params: {
				PageNumber: pagination?.PageNumber,
				PageSize: pagination?.PageSize,
				roomId: roomId,
			},
		});
		return response.data;
	},
	joinRequest: async (params: JoinRequestParams): Promise<Response<any>> => {
		const url = "/request/join/" + params.requestId;
		const response = await axiosClient.put(url, params);
		return await response.data;
	},
	getRequestDetail: async (requestId: string): Promise<Response<any>> => {
		const url = `/request/${requestId}`;
		const response = await axiosClient.get(url);
		return response.data;
	},
	updateRequest: async (params: {
		requestId: string;
		requestDatetime: string;
		placeId: string;
		hostBirdId: string;
	}): Promise<Response<any>> => {
		const url = `/request/${params.requestId}`;
		const response = await axiosClient.put(url, params);
		return response.data;
	},
	quickMatchRequest: async (
		requestId: string,
		roomId: string
	): Promise<Response<any>> => {
		const url = `/quickmatch/room/${roomId}/${requestId}`;
		const response = await axiosClient.get(url);
		//TODO : wait for endpoint
		return response.data;
	},
	getMyRequest: async () => {
		const url = `/request/user`;
		const response = await axiosClient.get(url);
		return response.data;
	},
	requestReady: async (requestId: string) => {
		const url = `/request/ready/${requestId}`;
		const response = await axiosClient.put(url);
		return response.data;
	},
	groupRequest: async (groupId: string): Promise<Response<any>> => {
		const url = `/request/group/${groupId}`;
		const response = await axiosClient.get(url);
		return response.data;
	},
	mergeRequest: async ({
		hostRequestId,
		challengerRequestId,
	}: {
		challengerRequestId: string;
		hostRequestId: string;
	}) => {
		const url = "/request/merge";
		const response = await axiosClient.post(url, {
			hostRequestId,
			challengerRequestId,
		});
		return response.data;
	},
	requestSelfCheck: async (params: {
		hostRequestID: string;
		challengerRequestID: string;
	}) => {
		const url = "/request/check";
		const res = await axiosClient.put(url, params);
		return res.data;
	},
	kickFromRequest: async (requestId: string, userId: string) => {
		const url = "/request/kick/" + requestId;
		const res = await axiosClient.put(url, userId);
		return res.data;
	},
	leaveRequest: async (requestId: string) => {
		const url = "/request/leave/" + requestId;
		const res = await axiosClient.put(url);
		return res.data;
	},
	cancelRequest: async (requestId: string) => {
		const url = "/request/" + requestId;
		const res = await axiosClient.delete(url);
		return res.data;
	},
	createMatch: async (requestId: string) => {
		const url = "/match";
		const res = await axiosClient.post(url, {
			RequestId: requestId,
		});
		return res.data;
	},
};
