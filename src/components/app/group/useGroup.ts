import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GroupApi } from './group.api'
import {Response} from '../../../api/index'


const useGroupPage = () => {
    const [groupList,setGroupList] = useState<any[]>([]);
    useEffect(() => {
      getGroupList().then(groupList => setGroupList(groupList));
    }, [])
    
    const getGroupList = useCallback( async ()=>{
        const response = await GroupApi.getGroupList() ;
        console.log("GROUPLIST",response.data )
        return response.data;
    },[])
  return (
   {
    getGroupList,groupList
   }
  )
}

export default useGroupPage