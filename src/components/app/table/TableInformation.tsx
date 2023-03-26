import { IconMapPin, IconClock, IconPencil } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { RequestEntity } from "../../../utils/types";
import CreateRequestForm from "../../common/form/CreateRequestForm";
import useGoogleMap from "../../common/map/useGoogleMap";
import useRequest from "../lobby/useRequest";
import {
	TableInformationItem,
	TableInformations,
	TableOthers,
} from "./table.style";

type Props = {
	request: any;
	reloadCallback: () => void;
	isOwner?: boolean;
};

const TableInformation = ({ request, reloadCallback, isOwner }: Props) => {
	const { setLocation, GoogleMap, location } = useGoogleMap({
		onLocationChanged: (location) => {
			console.log(location);
		},
		mapSize: "sm",
	});
	const { updateRequest } = useRequest(false);
	const [edit, setEdit] = useState<boolean>(false);
	useEffect(() => {
		setLocation(request?.place);
	}, [request]);
	return (
		<TableOthers>
			{!edit ? (
				<>
					{isOwner && (
						<IconPencil
							id="edit"
							color="var(--dark-blue)"
							onClick={() => setEdit(true)}
						/>
					)}
					<TableInformations>
						<TableInformationItem>
							<IconMapPin />
							<span>{request?.place?.name}</span>
						</TableInformationItem>
						<TableInformationItem>
							<IconClock />
							<span>
								{request?.requestDatetime?.split("T")?.[0]}{" "}
								{new Date(Date.parse(request?.requestDatetime)).getHours() === 0
									? "Morning"
									: "Afternoon"}
							</span>
						</TableInformationItem>
					</TableInformations>
					{GoogleMap}
				</>
			) : (
				<CreateRequestForm
					options={{
						mapSize: "sm",
						selectBird: false,
						isUpdate: true,
						updateCancelHandle: () => setEdit(false),
					}}
					handleCreateRequest={(data) => {
						updateRequest(
							{
								...data,
							},
							request,
							() => {
								setEdit(false);
								reloadCallback();
							}
						);
					}}
				/>
			)}
		</TableOthers>
	);
};

export default TableInformation;
