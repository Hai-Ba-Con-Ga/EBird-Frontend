import React from "react";
import Table from "../../components/admin/views/dashboard/Table";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
// import {Table as MuiTable} from '@mui/material'
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Button, Checkbox, Typography } from "@mui/material";
import useRoomAdmin from "../../components/admin/room/useRoomAdmin";
import CreateRoomForm from "../../components/admin/room/CreateRoomForm";
import useModal from "../../components/common/modal/useModal";
const RoomPage = () => {
	const {
		room,
		tablePagination,
		selected,
		isAllSelected,
		onDeselectAll,
		rowSelected,
		onSelectAll,
		refreshList,
	} = useRoomAdmin();
	const { openModal } = useModal();
	return (
		<div>
			<div
				className=""
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "flex-end",
					marginBottom: "1rem",
				}}
			>
				<Button
					variant="contained"
					color="primary"
					onClick={() =>
						openModal({
							payload: null,
							closable: true,
							component: (
								<CreateRoomForm onCreateSuccessCallback={() => refreshList()} />
							),
						})
					}
				>
					Create Room
				</Button>
			</div>
			<Table
				selectAllChecked={isAllSelected ?? false}
				onSelectAll={isAllSelected ? onDeselectAll : onSelectAll}
				pagination={tablePagination}
				isSelect={true}
				fieldNames={["Id", "Room Name", "City"]}
			>
				<>
					{room?.map((row: any) => (
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
							<TableCell>{row?.name}</TableCell>
							<TableCell>{`${row?.city}`}</TableCell>
						</TableRow>
					))}
				</>
			</Table>
		</div>
	);
};

export default RoomPage;
