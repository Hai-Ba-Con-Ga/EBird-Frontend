import axiosClient from "../../../api/axiosClient";
import {Response} from '../../../api/index';
export interface Group {
    "id": string,
    "name": string,
    "maxELO": number,
    "minELO": number,
    "status": string,
    "createDatetime": Date,
    "createdById": string
}

export const GroupApi = {
    getGroupList : async ():Promise<Response<Group[]>> => {
        const url = "/group/all";
        const response  = await axiosClient.get(url,{
            // params : {
            //     PageSize : 4 ,
            //     CurrentPage : 1
            // }
        });
        return response.data
    }
}