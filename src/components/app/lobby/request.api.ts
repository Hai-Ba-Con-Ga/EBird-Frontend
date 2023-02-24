import axiosClient from "../../../api/axiosClient";
import { Response } from "../../../utils/types/api";
import { CreateRequestParams, GetAllRequestParams, JoinRequestParams } from "../../../utils/types/api/params";

//TODO : type imple
export const RequestApi = {
    createRequest  : async (params : CreateRequestParams ) : Promise<Response<any>> => {
        const url = '/request'
        const response = await axiosClient.post(url,params);
        return response.data;
    },
    getAllRequest : async (params : GetAllRequestParams) : Promise<Response<any>> =>{
        const url = '/request/all';
        const response = await axiosClient.get(url,{
            params,
        });
        return response.data;
    },
    joinRequest : async (params : JoinRequestParams) : Promise<Response<any>> => {
        const url = '/request/join/'+params.requestId;
        const response = await axiosClient.put(url, params);
        return await response.data;
    } 
}
