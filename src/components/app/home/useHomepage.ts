import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { HomeApi } from './home.api'
import {Response} from '../../../api/index'


const useHomepage = () => {
    const [leaderboard,setLeaderboard] = useState<any[]>([]);
    useEffect(() => {
      getLeaderboard().then(leaderboard => setLeaderboard(leaderboard));
    }, [])
    
    const getLeaderboard = useCallback( async ()=>{
        const response = await HomeApi.getLeaderboardBirds() ;
        console.log("LEADERBOARD",response.data )
        return response.data;

        
    },[])
  return (
   {
    getLeaderboard,leaderboard
   }
  )
}

export default useHomepage