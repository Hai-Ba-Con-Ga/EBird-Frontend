import { Checkbox, Pagination, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useAdminAccount from "../../components/admin/account/useAdminAccount";
import Table from "../../components/admin/views/dashboard/Table";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
// import {Table as MuiTable} from '@mui/material'
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import usePagination from "../../components/admin/common/pagination/usePagination";
const RoleMap: any = {
	User: "User",
	2: "Admin",
};
const AccountPage = () => {
	const { accounts } = useAdminAccount();
	const [selected, setSelected] = useState<{ [key: string]: boolean }>();
	const { tablePagination, pagination } = usePagination();
	useEffect(() => {
		if (accounts) {
			setSelected(() => {
				const initialState: { [key: string]: boolean } = {};
				accounts?.forEach((account) => {
					initialState[account.id] = true;
				});
				return initialState;
			});
		}
	}, [accounts]);
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
			accounts?.forEach((account) => {
				updatedSelected[account.id] = true;
			});
			return updatedSelected;
		});
	}, [accounts, setSelected, selected]);

	const onDeselectAll = useCallback(() => {
		if (selected) {
			setSelected((prevSelected) => {
				const updatedSelected = { ...prevSelected };
				Object.keys(selected)?.forEach((accountId) => {
					updatedSelected[accountId] = false;
				});
				return updatedSelected;
			});
		}
	}, [selected]);

	const isAllSelected = useMemo(() => {
		if (selected) {
			return accounts?.every((account) => selected?.[account.id]);
		}
	}, [accounts, selected]);
	useEffect(() => {
		console.log(selected);
	}, [selected]);

	return (
		<div>
			<Table
				selectAllChecked={isAllSelected ?? false}
				onSelectAll={isAllSelected ? onDeselectAll : onSelectAll}
				pagination={tablePagination}
				isSelect={true}
				fieldNames={["Id", "Username", "Name", "Email", "Role", "Bio", "VIP"]}
			>
				<>
					{accounts?.map((row: any) => (
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
							<TableCell>{row?.username}</TableCell>
							<TableCell>{`${row?.firstName} ${row?.lastName}`}</TableCell>
							<TableCell>{row?.email}</TableCell>
							<TableCell>{RoleMap[row?.role]}</TableCell>
							<TableCell>{row?.description}</TableCell>
							<TableCell>{"IS VIP"}</TableCell>
						</TableRow>
					))}
				</>
			</Table>
		</div>
	);
};

export default AccountPage;
