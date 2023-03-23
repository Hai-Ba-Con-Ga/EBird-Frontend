import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import { LeaderboardTable, SeeMoreRankLink } from "./homepage.style";
import { Bird } from "../../../utils/types";
import { TablePagination } from "@mui/material";
import { IconRosette, IconRosetteFilled } from "@tabler/icons-react";
import styled from "styled-components";
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
				{ranks?.map((bird, i) => {
					const no = ranks.indexOf(bird) + 1;
					return (
						<tr key={bird?.id}>
							<td
								style={{
									fontWeight: 600,
									display: "flex",
									justifyContent: "center",
								}}
							>
								{no <= 3 ? (
									<RankBadge>
										<IconRosette
											size={"4rem"}
											style={{
												fill:
													no == 1
														? "var(--gold-secondary)"
														: no == 2
														? "var(--light-gray)"
														: "var(--gold-primary)",
											}}
											color={
												no == 1
													? "var(--gold-secondary)"
													: no == 2
													? "var(--light-gray)"
													: "var(--gold-primary)"
											}
										/>
										<span>{no}</span>
									</RankBadge>
								) : (
									no
								)}
							</td>
							<td style={{ position: "relative", textAlign: "left" }}>
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
					);
				})}
			</tbody>
			{/* {pagination && (
				<TablePagination
					component={"div"}
					count={pagination.totalItems || 10}
					rowsPerPageOptions={[5, 10]}
					page={pagination.currentPage}
					rowsPerPage={pagination.rowPerPage}
					onPageChange={pagination.onPageChange}
					onRowsPerPageChange={pagination.onPageSizeChange}
				/>
			)} */}
		</LeaderboardTable>
	);
};
const RankBadge = styled.div`
	width: fit-content;
	height: fit-content;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		position: absolute;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		color: var(--white);
	}
`;
export default LeaderBoard;
