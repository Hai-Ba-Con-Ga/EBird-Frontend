import axiosClient from "../../../api/axiosClient";
import { CreatePlaceParams } from "../../../utils/types/api/params";

export const PlaceApi = {
  createPlace: async (params: CreatePlaceParams) => {
    const url = `/place`;
    const response = await axiosClient.post(url, params);
    return response.data;
  },
};
