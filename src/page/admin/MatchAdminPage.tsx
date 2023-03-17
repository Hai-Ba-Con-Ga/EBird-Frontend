import React, { useState } from "react";
import Table from "../../components/admin/views/dashboard/Table";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
// import {Table as MuiTable} from '@mui/material'
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Checkbox, Typography } from "@mui/material";
import useMatchAdmin from "../../components/admin/match/useMatchAdmin";
import { IconDots } from "@tabler/icons-react";
import useModal from "../../components/common/modal/useModal";
import ConflictMatchForm from "../../components/admin/match/ConflictMatchForm";

const MatchAdminPage = () => {
	const {
		matches,
		tablePagination,
		selected,
		isAllSelected,
		onDeselectAll,
		rowSelected,
		onSelectAll,
		MatchPageTabs,
		currentTab,
		setTab,
	} = useMatchAdmin();
	const { openModal } = useModal();
	return (
		<div>
			<Box
				component={"div"}
				style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
			>
				{MatchPageTabs?.map((tab, i) => (
					<Chip
						style={{
							fontSize: "var(--text-xl)",
							fontWeight: 600,
							cursor: "pointer",
							padding: "1.5rem 1rem",
						}}
						key={i}
						color={currentTab == tab.value ? "primary" : "default"}
						onClick={() => setTab(tab.value)}
						label={tab?.label}
					/>
				))}
			</Box>
			<Table
				selectAllChecked={isAllSelected ?? false}
				onSelectAll={isAllSelected ? onDeselectAll : onSelectAll}
				pagination={tablePagination}
				isSelect={true}
				fieldNames={["Id", "Match Datetime", "Place", "Address", "Status"]}
			>
				<>
					{matches?.map((row: any) => (
						<TableRow
							style={{ cursor: "pointer" }}
							onClick={() => {
								if (row.matchStatus == "Conflict") {
									openModal({
										payload: null,
										closable: true,
										component: <ConflictMatchForm matchId={row?.id} />,
									});
								}
							}}
							hover
							key={row.id}
							sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
						>
							<TableCell>
								{selected && (
									<Checkbox
										onChange={() => rowSelected(row.id)}
										checked={selected[row.id]}
									/>
								)}
							</TableCell>
							<TableCell
								sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
							>
								<Box
									component={"div"}
									sx={{ display: "flex", flexDirection: "column" }}
								>
									<Typography
										sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}
									>
										{row?.id}
									</Typography>
									{/* <Typography variant='caption'>{row.designation}</Typography> */}
								</Box>
							</TableCell>
							<TableCell>{row?.matchDatetime}</TableCell>
							<TableCell>{row?.place?.name}</TableCell>
							<TableCell>{row?.place?.address}</TableCell>
							<TableCell>{row?.matchStatus}</TableCell>

							<TableCell>
								<IconDots
									style={{ cursor: "pointer" }}
									color={"var(--dark-blue)"}
								/>
							</TableCell>
						</TableRow>
					))}
				</>
			</Table>
		</div>
	);
};

export default MatchAdminPage;
