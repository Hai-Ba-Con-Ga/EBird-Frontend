import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RoomApi } from "../../app/room/room.api";
import usePagination from "../common/pagination/usePagination";

const useRoomAdmin = () => {
	const [room, setRoom] = useState<any[]>();
	const {
		tablePagination,
		pagination,
		setPagination,
		setTotalPages,
		setTotalItems,
	} = usePagination();

	useEffect(() => {
		RoomApi.getAllRooms().then((response) => {
			setSelected(null);
			setPagination({
				...pagination,
				totalItems: response.data.length,
				totalPages: response.data.length / pagination.pageSize,
			});
			setRoom(response.data);
		});
	}, [pagination.currentPage, pagination.pageSize]);
	const [selected, setSelected] = useState<{ [key: string]: boolean } | null>();
	useEffect(() => {
		if (room) {
			setSelected(() => {
				const initialState: { [key: string]: boolean } = {};
				room?.forEach((request) => {
					initialState[request.id] = false;
				});
				return initialState;
			});
		}
	}, [room]);
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
			room?.forEach((request) => {
				updatedSelected[request.id] = true;
			});
			return updatedSelected;
		});
	}, [room, setSelected, selected]);
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
			return room?.every((request) => selected?.[request.id]);
		}
	}, [room, selected]);
	const refreshList = useCallback(() => {
		RoomApi.getAllRooms().then((response) => {
			setSelected(null);
			setPagination({
				...pagination,
				totalItems: response.data.length,
				totalPages: response.data.length / pagination.pageSize,
			});
			setRoom(response.data);
		});
	}, []);
	return {
		room,
		tablePagination,
		selected,
		rowSelected,
		onSelectAll,
		isAllSelected,
		onDeselectAll,
		refreshList,
	};
};

export default useRoomAdmin;
