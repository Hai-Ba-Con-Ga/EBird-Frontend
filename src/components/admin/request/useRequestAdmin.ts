import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RequestApi } from '../../app/lobby/request.api';
import usePagination from '../common/pagination/usePagination';



const useRequestAdmin = () => {
    const [requests,setRequests] = useState<any[]>();
    const {tablePagination,pagination,setPagination,setTotalPages,setTotalItems} = usePagination();

  useEffect(()=>{
      RequestApi.getAllRequest({
        pagination: {
            PageNumber: pagination.currentPage+1,PageSize:pagination.pageSize
        }
      }).then(response=>{
          setSelected(null);
          setPagination({...pagination,totalItems: response.pagingData.totalCount,totalPages: response.pagingData.totalPages})
          setRequests(response.data)
      })
  },[pagination.currentPage,pagination.pageSize])
  const [selected, setSelected] = useState<{ [key: string]: boolean }|null>();
  useEffect(() => {
      if (requests) {
          setSelected(() => {
              const initialState: { [key: string]: boolean } = {};
              requests?.forEach((request) => {
                  initialState[request.id] = false;
              });
              return initialState;
          });
      }
  }, [requests]);
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
          requests?.forEach((request) => {
              updatedSelected[request.id] = true;
          });
          return updatedSelected;
      });
  }, [requests, setSelected, selected]);
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
          return requests?.every((request) => selected?.[request.id]);
      }
  }, [requests, selected]);
  return (
  {
      requests,
      tablePagination,
      selected,
      rowSelected,
      onSelectAll,
      isAllSelected,
      onDeselectAll
  }
  )
}

export default useRequestAdmin