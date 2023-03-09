import axiosClient from "../../../api/axiosClient";
import { Response } from "../../../api/index";
export interface Bird {
	id: string;
	name: string;
	age: number;
	weight: number;
	elo: number;
	status: string;
	description: string;
	color: string;
	birdTypeId: string;
	ownerId: string;
	createdDatetime: Date;
	resourceList: any[];
}

export const RankApi = {
	getLeaderboardBirdsBySearch: async (
		search?: string
	): Promise<Response<Bird[]>> => {
		const url = "/bird/all";
		const response = await axiosClient.get(url, {
			params: {
				PageSize: 10,
				CurrentPage: 1,
				keyword: search,
				SortElo: "DESC",
			},
		});
		return response.data;
	},
};
