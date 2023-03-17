import React, { useCallback, useEffect, useState } from "react";

export interface Pagination {
	currentPage: number;
	pageSize: number;
	totalPages?: number;
	totalItems?: number;
}
const DEFAULT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 10;
const usePagination = () => {
	const [pagination, setPagi] = useState<Pagination>({
		currentPage: DEFAULT_PAGE,
		pageSize: DEFAULT_PAGE_SIZE,
		totalPages: 0,
		totalItems: 0,
	});
	useEffect(() => {
		// console.log("pagination changed, ",pagination);
	}, [pagination]);

	const setPagination = useCallback((pagination: Pagination) => {
		setPagi(pagination);
	}, []);
	const nextPage = useCallback(() => {
		setPagi({ ...pagination, currentPage: pagination.currentPage + 1 });
	}, [pagination]);
	const prevPage = useCallback(() => {
		setPagi({ ...pagination, currentPage: pagination.currentPage + 1 });
	}, [pagination]);
	const toPage = useCallback(
		(page: number) => {
			setPagi({ ...pagination, currentPage: page });
		},
		[pagination]
	);
	const setPageSize = useCallback(
		(pageSize: number) => {
			setPagi({ ...pagination, pageSize });
		},
		[pagination]
	);
	const firstPage = useCallback(() => {
		toPage(1);
	}, [pagination]);
	const setTotalPages = useCallback(
		(totalPages: number) => {
			setPagi({ ...pagination, totalPages });
		},
		[pagination]
	);
	const setTotalItems = useCallback(
		(totalItems: number) => {
			setPagi({ ...pagination, totalItems });
		},
		[pagination]
	);
	return {
		setPagination,
		pagination,
		nextPage,
		prevPage,
		toPage,
		setPageSize,
		firstPage,
		setTotalPages,
		setTotalItems,
		tablePagination: {
			currentPage: pagination.currentPage,
			rowPerPage: pagination.pageSize,
			totalPages: pagination.totalPages ?? 1,
			totalItems: pagination.totalItems ?? 0,
			onPageChange: (ev: any, page: number) => {
				toPage(page);
			},
			onPageSizeChange: (ev: any) => {
				setPageSize(ev.target.value);
			},
		},
	};
};

export default usePagination;
