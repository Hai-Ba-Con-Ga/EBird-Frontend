import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {RankApi} from './rank.api'
import {Response} from '../../../api/index'


const useRank = (search:string) => {
    const [leaderboardSearch,setLeaderboard] = useState<any[]>([]);
    useEffect(() => {
      getLeaderboard().then(leaderboardSearch => setLeaderboard(leaderboardSearch));
    }, [])
    
    const getLeaderboard = useCallback( async ()=>{
        const response = await RankApi.getLeaderboardBirdsBySearch(search) ;
        console.log("LEADERBOARD",response.data )
        return response.data;

        
    },[])
  return (
   {
    getLeaderboard,leaderboardSearch
   }
  )
}

export default useRank