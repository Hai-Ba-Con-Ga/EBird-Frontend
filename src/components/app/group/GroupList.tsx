import React, { useCallback, useEffect, useState } from "react";
import { Group } from "../../../utils/types";
import { GroupLink, GroupTable } from "./grouppage.style";

export interface Props {
	groups: Group[];
}

const AllGroup = ({ groups }: Props) => {
	useEffect(() => {
		console.log(groups);
	}, [groups]);

	return (
		<GroupTable>
			<thead>
				<tr>
					<th>NAME</th>
					<th>MIN ELO</th>
					<th>MAX ELO</th>
				</tr>
			</thead>

			<tbody>
				{groups?.map((group, i) => (
					<tr key={group?.id}>
						<td>{group?.name}</td>
						<td>{group?.minELO}</td>
						<td>{group?.maxELO}</td>
						<td>
							<GroupLink to={"/app/group/" + group?.id}>JOIN</GroupLink>
						</td>
						{/* BỔ SUNG GROUP LINK */}
					</tr>
				))}
				{/* <tr>
                    <td>COMMON</td>
                    <td>1010</td>
                    <td>1200</td>
                    <td><GroupLink to={"/app"}>JOIN</GroupLink></td>
                </tr>
                <tr>
                    <td>BEGINNER</td>
                    <td>1210</td>
                    <td>1400</td>
                    <td><GroupLink to={"/app"}>JOIN</GroupLink></td>
                </tr>
                <tr>
                    <td>SEMI PRO</td>
                    <td>1410</td>
                    <td>1600</td>
                    <td><GroupLink to={"/app"}>JOIN</GroupLink></td>
                </tr> */}
			</tbody>
		</GroupTable>
	);
};

export default AllGroup;
