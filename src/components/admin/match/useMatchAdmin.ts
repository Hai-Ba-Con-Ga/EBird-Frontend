import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MatchApi } from '../../app/lobby/match.api';
import usePagination from '../common/pagination/usePagination';



const useMatchAdmin = () => {
    const [matches,setMatches] = useState<any[]>();
    const {tablePagination,pagination,setPagination,setTotalPages,setTotalItems} = usePagination();

  useEffect(()=>{
    // TODO: //Status
      MatchApi.getAllMatches({
            PageNumber: pagination.currentPage+1,PageSize:pagination.pageSize,
      }).then(response=>{
          setSelected(null);
          setPagination({...pagination,totalItems: response.pagingData.totalCount,totalPages: response.pagingData.totalPages})
          setMatches(response.data)
      })
  },[pagination.currentPage,pagination.pageSize])
  const [selected, setSelected] = useState<{ [key: string]: boolean }|null>();
  useEffect(() => {
      if (matches) {
          setSelected(() => {
              const initialState: { [key: string]: boolean } = {};
              matches?.forEach((request) => {
                  initialState[request.id] = false;
              });
              return initialState;
          });
      }
  }, [matches]);
  const rowSelected = useCallback((id: string) => {
      setSelected((prevSelected) => {
          return {
              ...prevSelected,
              [id]: !prevSelected?.[id],
          };
      });
  }, []);
  const onSelectAll = useCallback(() => {
      setSelected((prevSelected) => {
          const updatedSelected = { ...prevSelected };
          matches?.forEach((request) => {
              updatedSelected[request.id] = true;
          });
          return updatedSelected;
      });
  }, [matches, setSelected, selected]);
  const onDeselectAll = useCallback(() => {
      if (selected) {
          setSelected((prevSelected) => {
              const updatedSelected = { ...prevSelected };
              Object.keys(selected)?.forEach((requestId) => {
                  updatedSelected[requestId] = false;
              });
              return updatedSelected;
          });
      }
  }, [selected]);

  const isAllSelected = useMemo(() => {
      if (selected) {
          return matches?.every((request) => selected?.[request.id]);
      }
  }, [matches, selected]);
  return (
  {
      matches,
      tablePagination,
      selected,
      rowSelected,
      onSelectAll,
      isAllSelected,
      onDeselectAll
  }
  )
}

export default useMatchAdmin