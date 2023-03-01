import axiosClient from "../../../api/axiosClient";
import { Response } from "../../../api";

export const RoomApi = {
  getAllRooms: async (): Promise<Response<any[]>> => {
    const url = "/room/all";
    const response = (await axiosClient.get(url)) as Response<any[]>;
    return response.data as any;
  },
};
