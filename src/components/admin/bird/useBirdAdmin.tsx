import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Bird } from '../../../utils/types';
import usePagination, { Pagination } from '../common/pagination/usePagination';
import { BirdAdminApi } from './bird.admin.api';

type Props = {
    pagination : {
        page : number,
        pageSize:  number
        setPagination: (pagination: Pagination)=> void;
    }
}

const useBirdAdmin = () => {
    const [birds,setBirds] = useState<Bird[]>();
      const {tablePagination,pagination,setPagination,setTotalPages,setTotalItems} = usePagination();

    useEffect(()=>{
        BirdAdminApi.getAllBird({
            page: pagination.currentPage+1,pageSize:pagination.pageSize
        }).then(response=>{
            setSelected(null);
            setPagination({...pagination,totalItems: response.pagingData.totalCount,totalPages: response.pagingData.totalPages})
            setBirds(response.data)
        })
    },[pagination.currentPage,pagination.pageSize])
    const [selected, setSelected] = useState<{ [key: string]: boolean }|null>();
	useEffect(() => {
		if (birds) {
			setSelected(() => {
				const initialState: { [key: string]: boolean } = {};
				birds?.forEach((account) => {
					initialState[account.id] = false;
				});
				return initialState;
			});
		}
	}, [birds]);
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
			birds?.forEach((account) => {
				updatedSelected[account.id] = true;
			});
			return updatedSelected;
		});
	}, [birds, setSelected, selected]);
    const onDeselectAll = useCallback(() => {
		if (selected) {
			setSelected((prevSelected) => {
				const updatedSelected = { ...prevSelected };
				Object.keys(selected)?.forEach((accountId) => {
					updatedSelected[accountId] = false;
				});
				return updatedSelected;
			});
		}
	}, [selected]);

	const isAllSelected = useMemo(() => {
		if (selected) {
			return birds?.every((account) => selected?.[account.id]);
		}
	}, [birds, selected]);
    return (
    {
        birds,
        tablePagination,
        selected,
        rowSelected,
        onSelectAll,
        isAllSelected,
        onDeselectAll
    }
    )
}

export default useBirdAdmin