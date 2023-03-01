import axiosClient from "../../../api/axiosClient";
import { Bird } from "../../../utils/types";
import { Response } from "../../../utils/types/api";

export const BirdApi = {
    getOwnedBirds: async () :Promise<Response<Bird[]>> => {
        const url = "/bird/owner";
        const response = await axiosClient.get(url);
        return response.data;

    }
}