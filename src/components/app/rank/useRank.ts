import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {RankApi} from './rank.api'
import {Response} from '../../../api/index'
import {debounce} from 'lodash'
type Props = {
  searchPlayerKeyword?: string,
  filter?: any[]

}

const useRank = ({searchPlayerKeyword} : Props) => {

  const [tab, setTab] = useState<number>(1);

  const [rank,setRank] = useState<any[]>([]);

  useEffect(() => {
      getRank().then(rank => setRank(rank));

    }, [])

    useEffect(() => {
      
      debounceSearchKeyword(searchPlayerKeyword);
      
    }, [searchPlayerKeyword])

    const debounceSearchKeyword = useCallback(
      debounce((searchPlayerKeyword) => {
        console.log("search player keyword: "+searchPlayerKeyword)
        
      },500)
      ,[]);



    const getRank = useCallback( async ()=>{
        const response = await RankApi.getLeaderboardBirdsBySearch(searchPlayerKeyword) ;
        console.log("RANK",response.data )
        return response.data;

        
    },[tab, searchPlayerKeyword])
  return (
   {
    tab,setTab,rank
   }
  )
}

export default useRank