import { IconMapPin,IconClock } from "@tabler/icons-react";
import React from "react";
import { RequestEntity } from "../../../utils/types";
import useGoogleMap from "../../common/map/useGoogleMap";
import {
  TableInformationItem,
  TableInformations,
  TableOthers,
} from "./table.style";

type Props = {
  request: any;
};

const TableInformation = ({ request }: Props) => {
  const { setLocation, GoogleMap, location } = useGoogleMap({
    onLocationChanged: (location) => {
      console.log(location);
    },
  });
  return (
    <TableOthers>
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
    </TableOthers>
  );
};

export default TableInformation;
