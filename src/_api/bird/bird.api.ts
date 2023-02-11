import axiosClient from "../axiosClient";

export interface Bird {
  "id": string,
  "name": string,
  "age": number,
  "weight": number,
  "elo": number,
  "status": string,
  "description": string,
  "color": string,
  "birdTypeId": string,
  "ownerId": string,
  "createdDatetime": Date,
  "resourceList": any[]
}

const BirdApi = {
  
  createBird: async (params: Bird) => {
    const url = "/bird";
    const response = await axiosClient.post(url, { ...params });
    return response.data;
  },
  updateBird: async (params: Bird) => {
    const url = "/bird";
    const response = await axiosClient.put(url, { ...params });
    return response.data;
  },
  getMyBird: async () => {
    const url = "/bird/all";
    const response = await axiosClient.get(url);
    return response.data;
  },
};
export default BirdApi;
