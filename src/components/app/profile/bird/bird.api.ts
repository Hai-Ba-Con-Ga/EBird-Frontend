import { Response } from "../../../../api";
import axiosClient from "../../../../api/axiosClient";
import { Bird, Match } from "../../../../utils/types";

export const BirdApi = {
	getBirdDetail: async (id: string): Promise<Response<Bird>> => {
		const url = `/bird/${id}`;
		const res = await axiosClient.get(url);
		return res.data;
	},
	getBirdByOwner: async (id: string): Promise<Response<Bird[]>> => {
		const url = `/bird/owner/${id}`;
		const res = await axiosClient.get(url);
		return res.data;
	},
	getAllBirdType: async (): Promise<Response<any[]>> => {
		const url = `/bird-type/all`;
		const res = await axiosClient.get(url);
		return res.data;
	},
	createNewBird: async (params: CreateBirdParams): Promise<Response<any>> => {
		const url = `/bird`;
		const res = await axiosClient.post(url, params);
		return await res.data;
	},
	getMatchHistory: async (birdId: string): Promise<Response<Match[]>> => {
		const url = `/match/bird/${birdId}`;
		const res = await axiosClient.get(url);
		return res.data;
	},
};

interface CreateBirdParams {
	name: string;
	age: number;
	weight: number;
	description: string;
	color: string;
	birdTypeId: string;
	ownerId: string;
}
