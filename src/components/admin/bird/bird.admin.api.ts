
import axiosClient from "../../../api/axiosClient";
import { Bird } from "../../../utils/types";
import { Response } from "../../../utils/types/api";

export const BirdAdminApi = {
    getAllBird : async ({page,pageSize} : {page:number, pageSize : number}):Promise<Response<Bird[]>> =>{
        const url = '/bird/all';
        const res = await axiosClient.get(url,{
            params:{PageNumber:page, PageSize:pageSize}
        });
        return res.data;
    }
}