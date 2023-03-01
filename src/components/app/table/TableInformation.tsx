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
};

const TableInformation = ({ request, reloadCallback }: Props) => {
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
          {request?.reference && (
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
              <span>{request?.requestDatetime}</span>
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
