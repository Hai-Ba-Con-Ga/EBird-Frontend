import axiosClient from "../../../api/axiosClient";
import { Response } from "../../../api/index";
import { Account } from "../../../utils/types";


export const FriendApi = {
	getFriendList: async (
		search?: string
	): Promise<Response<Account[]>> => {
		const url = "/account/search";
		const response = await axiosClient.get(url, {
			params: {
				PageSize: 1,
				CurrentPage: 1,
				username: search
			},
		});
		return response.data;
	},
};
