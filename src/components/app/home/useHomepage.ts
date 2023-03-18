import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { HomeApi } from "./home.api";
import { Response } from "../../../api/index";
import usePagination from "../../admin/common/pagination/usePagination";

const useHomepage = () => {
	const [leaderboard, setLeaderboard] = useState<any[]>([]);
	const {
		tablePagination,
		pagination,
		setPagination,
		setTotalPages,
		setTotalItems,
	} = usePagination();

	useEffect(() => {
		getLeaderboard();
	}, [pagination.currentPage, pagination.pageSize]);

	const getLeaderboard = useCallback(async () => {
		const response = await HomeApi.getLeaderboardBirds({
			page: pagination.currentPage + 1,
			pageSize: pagination.pageSize,
		});
		setPagination({
			...pagination,
			totalItems: response.pagingData.totalCount,
			totalPages: response.pagingData.totalPages,
		});
		setLeaderboard(response.data);
	}, [pagination.currentPage, pagination.pageSize]);
	return {
		getLeaderboard,
		leaderboard,
		tablePagination,
	};
};

export default useHomepage;
