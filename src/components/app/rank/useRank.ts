import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {RankApi} from './rank.api'
import {Response} from '../../../api/index'


const useRank = () => {
    const [rank,setRank] = useState<any[]>([]);
    useEffect(() => {
      getRank().then(rank => setRank(rank));
    }, [])
    
    const getRank = useCallback( async ()=>{
        const response = await RankApi.getRankBySearch(search) ;
        console.log("RANK",response.data )
        return response.data;

        
    },[])
  return (
   {
    getRank,rank
   }
  )
}

export default useRank