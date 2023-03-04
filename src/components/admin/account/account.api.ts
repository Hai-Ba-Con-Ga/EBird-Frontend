import axiosClient from "../../../api/axiosClient";

export const AccountApi = {
    getAllAccounts: async()=> {
        const url = '/account';
        const res = await axiosClient.get(url);
        return res.data; 
    }
}