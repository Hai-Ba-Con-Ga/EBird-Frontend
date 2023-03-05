import { Response } from "../../../api";
import axiosClient from "../../../api/axiosClient";

// TODO : add type Profile  at BFCS -126
export const ProfileApi = {
	getProfile: async (id: string): Promise<Response<any>> => {
		const url = `/account/${id}`;
		const res = await axiosClient.get(url);
		return res.data;
	},
};
