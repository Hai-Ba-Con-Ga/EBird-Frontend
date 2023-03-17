import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import { LeaderboardTable, SeeMoreRankLink } from "./homepage.style";
import { Bird } from "../../../utils/types";
import { TablePagination } from "@mui/material";
export interface Props {
	ranks: Bird[];
	pagination?: {
		onPageSizeChange: (event: any) => void;
		onPageChange: (event: any, page: number) => void;
		totalPages: number;
		currentPage: number;
		rowPerPage: number;
		totalItems: number;
	};
}
const LeaderBoard = ({ ranks, pagination }: Props) => {
	useEffect(() => {
		console.log(ranks);
	}, [ranks]);
	console.log(ranks);

	return (
		<LeaderboardTable>
			<thead>
				<tr>
					<th>Top</th>
					<th>
						Bird name
						<Chip style={{ fontSize: "2rem" }} size="medium" label={"ID"} />
					</th>
					<th>Type</th>
					<th>Owner</th>
					<th>Elo</th>
				</tr>
			</thead>
			<tbody>
				{ranks?.map((bird, i) => (
					<tr key={bird?.id}>
						<td style={{ fontWeight: 600 }}>{i + 1}</td>
						<td style={{ position: "relative" }}>
							{bird?.name}
							<Chip
								style={{
									fontSize: "var(--text-xl)",
									position: "absolute",
									fontWeight: 600,
									marginLeft: "5px",
								}}
								size="medium"
								label={"#" + bird?.number}
							/>
						</td>
						<td>{"Chao mao"}</td>
						<td>{bird?.owner.username}</td>
						<td>{bird?.elo}</td>
					</tr>
				))}
			</tbody>
			{pagination && (
				<TablePagination
					component={"div"}
					count={pagination.totalItems || 10}
					rowsPerPageOptions={[5, 10]}
					page={pagination.currentPage}
					rowsPerPage={pagination.rowPerPage}
					onPageChange={pagination.onPageChange}
					onRowsPerPageChange={pagination.onPageSizeChange}
				/>
			)}
		</LeaderboardTable>
	);
};

export default LeaderBoard;
