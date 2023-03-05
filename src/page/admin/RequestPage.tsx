import React from 'react'
import Table from "../../components/admin/views/dashboard/Table";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
// import {Table as MuiTable} from '@mui/material'
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Checkbox, Typography } from '@mui/material';
import useRequestAdmin from '../../components/admin/request/useRequestAdmin';


const RequestPage = () => {
    const {requests,tablePagination,selected,isAllSelected,onDeselectAll,rowSelected,onSelectAll}= useRequestAdmin();
  return (
    <div>
			<Table
				selectAllChecked={isAllSelected ?? false}
				onSelectAll={isAllSelected ? onDeselectAll : onSelectAll}
				pagination={tablePagination}
				isSelect={true}
				fieldNames={["Id", "Bird Name", "Age", "Weight", "Color","Elo", "Status","Owner", "Description", ]}
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
							<TableCell>{row?.name}</TableCell>
							<TableCell>{`${row?.age}`}</TableCell>
							<TableCell>{row?.weight}</TableCell>
							<TableCell>{row.color}</TableCell>
							<TableCell>{row.elo}</TableCell>
							<TableCell>{row.status}</TableCell>
							<TableCell>{row.owner?.username}</TableCell>
							<TableCell>{row?.description}</TableCell>
							<TableCell>{"IS VIP"}</TableCell>
						</TableRow>
					))}
				</>
			</Table>
		</div>
  )
}

export default RequestPage