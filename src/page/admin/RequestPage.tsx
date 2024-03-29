import React, { useCallback, useEffect, useState } from "react";
import Table from "../../components/admin/views/dashboard/Table";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
// import {Table as MuiTable} from '@mui/material'
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Button, Checkbox, MenuItem, Select, Typography } from "@mui/material";
import useRequestAdmin from "../../components/admin/request/useRequestAdmin";
import { IconSettingsAutomation } from "@tabler/icons-react";
import { MatchApi } from "../../components/app/lobby/match.api";
import useLoading from "../../components/useLoading";
import { RequestApi } from "../../components/app/lobby/request.api";
import { toast } from "react-toastify";

const RequestPage = () => {
	const {
		requests,
		tablePagination,
		selected,
		isAllSelected,
		onDeselectAll,
		rowSelected,
		onSelectAll,
		RequestPageTabs,
		setTab,
		currentTab,
		rooms,
		groups,
		roomSelect,
		setRoomSelect,
		groupSelect,
		setGroupSelect,
	} = useRequestAdmin();
	const { openLoading, closeLoading } = useLoading();
	const handleAutomatchClick = useCallback(async () => {
		openLoading();
		if (groupSelect) {
			const res = await MatchApi.autoMatchGroup(groupSelect);
			const resultsArray: any[] = res.data;
			if (resultsArray?.length > 0) {
				const mergeResult = await Promise.all(
					resultsArray.map((pair) => {
						return RequestApi.mergeRequest({
							hostRequestId: pair?.item1,
							challengerRequestId: pair?.item2,
						}).then((res) => res.data);
					})
				);
				const matchCreateResult = await Promise.all(
					mergeResult.map((reqId) => {
						return RequestApi.createMatch(reqId);
					})
				);
				console.log("MERGE GROUP REQUEST RESULT = ", mergeResult);
				console.log("CREATE Match RESULT = ", mergeResult);
				toast.success("Automatch successfully");
			}
		}
		closeLoading();
	}, [groupSelect]);
	return (
		<div>
			<Box
				component={"div"}
				style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
			>
				{RequestPageTabs?.map((tab, i) => (
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
			<Box
				component={"div"}
				style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
			>
				{currentTab == "room" && (
					<Select
						value={roomSelect}
						label="Room"
						onChange={(ev) => {
							console.log("Select room", ev.target.value);
							setRoomSelect(ev.target.value);
						}}
					>
						{rooms.map((room) => (
							<MenuItem key={room.id} value={room.id}>
								{room.name}
							</MenuItem>
						))}
					</Select>
				)}
				{currentTab == "group" && (
					<>
						<Select
							value={groupSelect}
							label="Group"
							onChange={(ev) => {
								console.log("Select room", ev.target.value);
								setGroupSelect(ev.target.value);
							}}
						>
							{groups?.map((group) => (
								<MenuItem key={group.id} value={group.id}>
									{group.name}
								</MenuItem>
							))}
						</Select>
						<Button
							variant="contained"
							style={{ fontWeight: 600 }}
							disabled={!groupSelect}
							color={groupSelect ? "primary" : "secondary"}
							onClick={handleAutomatchClick}
						>
							<IconSettingsAutomation color="white" /> Auto match
						</Button>
					</>
				)}
			</Box>
			<Table
				selectAllChecked={isAllSelected ?? false}
				onSelectAll={isAllSelected ? onDeselectAll : onSelectAll}
				pagination={tablePagination}
				isSelect={true}
				fieldNames={["Id", "Match Datetime", "Place", "Address", "Status"]}
			>
				<>
					{requests?.map((row: any) => (
						<TableRow
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
							<TableCell>{row?.requestDatetime}</TableCell>
							<TableCell>{row?.place?.name}</TableCell>
							<TableCell>{row?.place?.address}</TableCell>
							{/* <TableCell>{row?.matchStatus}</TableCell> */}
						</TableRow>
					))}
				</>
			</Table>
		</div>
	);
};

export default RequestPage;
