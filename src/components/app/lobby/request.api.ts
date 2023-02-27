import axios from "axios";
import axiosClient from "../../../api/axiosClient";
import { Response } from "../../../utils/types/api";
import {
  CreateRequestParams,
  GetAllRequestParams,
  JoinRequestParams,
} from "../../../utils/types/api/params";

//TODO : type imple
export const RequestApi = {
  createRequest: async (
    params: CreateRequestParams
  ): Promise<Response<any>> => {
    const url = "/request";
    const response = await axiosClient.post(url, params);
    return response.data;
  },
  getAllRequest: async (
    params: GetAllRequestParams
  ): Promise<Response<any>> => {
    const url = "/request/room";
    const response = await axiosClient.get(url, {
      params,
    });
    return response.data;
  },
  joinRequest: async (params: JoinRequestParams): Promise<Response<any>> => {
    const url = "/request/join/" + params.requestId;
    const response = await axiosClient.put(url, params);
    return await response.data;
  },
  getRequestDetail: async (requestId: string): Promise<Response<any>> => {
    const url = `/request/${requestId}`;
    const response = await axiosClient.get(url);
    return response.data;
  },
  updateRequest: async (params: {
    requestId: string;
    requestDatetime: string;
    placeId: string;
    hostBirdId: string;
  }): Promise<Response<any>> => {
    const url = `/request/${params.requestId}`;
    const response = await axiosClient.put(url, params);
    return response.data;
  },
  quickMatchRequest: async (requestId: string): Promise<Response<any>> => {
    const url = `/request/quickMatch`;
    const response = await axiosClient.get(url);
    //TODO : wait for endpoint
    return response.data;
  },
  getMyRequest : async ()=>{
    const url = `/request/user`;
    const response = await axiosClient.get(url);
    return response.data;
  },
  requestReady : async (requestId : string) => {
    const url = `/request/ready/${requestId}`
    const response = await axiosClient.put(url);
    return response.data;
  },
}; 
