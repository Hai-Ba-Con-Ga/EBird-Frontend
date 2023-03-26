import axiosClient from "../../../api/axiosClient";

export const ChatApi = {
	getChat: async (tableId: string) => {
		const chatRoomId = (
			await axiosClient.get("/chat-room/get-by-ref", {
				params: {
					refId: tableId,
				},
			})
		).data.data;
		const url = `/message/chat-room/${chatRoomId.id}`;
		const res = await axiosClient.get(url);
		return res.data;
	},
};
