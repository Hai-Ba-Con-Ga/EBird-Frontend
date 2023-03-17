import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Group, Room } from "../../../utils/types";
import { GroupApi } from "../../app/group/group.api";
import { RequestApi } from "../../app/lobby/request.api";
import { RoomApi } from "../../app/room/room.api";
import usePagination from "../common/pagination/usePagination";

const useRequestAdmin = () => {
	const [requests, setRequests] = useState<any[]>();
	const [rooms, setRooms] = useState<Room[]>([]);
	const [groups, setGroups] = useState<Group[]>([]);
	const [roomSelect, setRoomSelect] = useState<string>();
	const [groupSelect, setGroupSelect] = useState<string>("");
	useEffect(() => {
		if (rooms.length > 0) {
			setRoomSelect(rooms[0].id);
		}
	}, [rooms]);
	useEffect(() => {
		if (groups.length > 0) {
			setRoomSelect(groups[0].id);
		}
	}, [groups]);
	const {
		tablePagination,
		pagination,
		setPagination,
		setTotalPages,
		setTotalItems,
	} = usePagination();
	const RequestPageTabs = [
		{
			label: "All",
			value: "",
		},
		{
			label: "Room",
			value: "room",
		},
		{
			label: "Group",
			value: "group",
		},
	];
	const [currentTab, setTab] = useState<string>(RequestPageTabs[0].value);
	useEffect(() => {
		GroupApi.getGroupList().then((res) => setGroups(res.data));
		RoomApi.getAllRooms().then((res) => setRooms(res.data));
	}, []);
	useEffect(() => {
		if (!currentTab) {
			RequestApi.getAllRequest({
				pagination: {
					PageNumber: pagination.currentPage + 1,
					PageSize: pagination.pageSize,
				},
			}).then((response) => {
				setSelected(null);
				setPagination({
					...pagination,
					totalItems: response.pagingData.totalCount,
					totalPages: response.pagingData.totalPages,
				});
				setRequests(response.data);
			});
		}
	}, [pagination.currentPage, pagination.pageSize, currentTab]);
	useEffect(() => {
		if (currentTab == "group" && groupSelect) {
			RequestApi.groupRequest(groupSelect).then((res) => setRequests(res.data));
		}
	}, [groupSelect, currentTab]);
	const [selected, setSelected] = useState<{ [key: string]: boolean } | null>();
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
	return {
		requests,
		tablePagination,
		selected,
		rowSelected,
		onSelectAll,
		isAllSelected,
		onDeselectAll,
		RequestPageTabs,
		setTab,
		currentTab,
		rooms,
		groups,
		roomSelect,
		setRoomSelect,
		groupSelect,
		setGroupSelect,
	};
};

export default useRequestAdmin;
