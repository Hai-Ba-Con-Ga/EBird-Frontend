import axiosClient from "../../../api/axiosClient";
import { Response } from "../../../api/index";
import { Group } from "../../../utils/types";
// export interface Group {
//     "id": string,
//     "name": string,
//     "maxELO": number,
//     "minELO": number,
//     "status": string,
//     "createDatetime": Date,
//     "createdById": string
// }

export const GroupApi = {
	getGroupList: async (): Promise<Response<Group[]>> => {
		const url = "/group/all";
		const response = await axiosClient.get(url, {
			params: {
				PageSize: 100,
				CurrentPage: 1,
			},
		});
		return response.data;
	},
};
