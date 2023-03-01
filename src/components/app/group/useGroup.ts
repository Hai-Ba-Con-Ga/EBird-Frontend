import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GroupApi } from './group.api'
import {Response} from '../../../api/index'
import { RequestApi } from '../lobby/request.api'

const useGroupPage = (isGetGroupList : boolean) => {
    const [groupList,setGroupList] = useState<any[]>([]);
    useEffect(() => {
      getGroupList().then(groupList => setGroupList(groupList));
    }, [])
    
    const getGroupList = useCallback( async ()=>{
        const response = await GroupApi.getGroupList() ;
        console.log("GROUPLIST",response.data )
        return response.data;
    },[])
    const getGroupRequest = useCallback( async (groupId : string)=> {
      const response = await RequestApi.groupRequest(groupId);
      if(response.success) {
        return response.data
      }else {
        toast.error("Fail to get requests in this group");
      }
    },[]);
  return (
   {
    getGroupList,
    groupList,
    getGroupRequest
   }
  )
}
export default useGroupPage