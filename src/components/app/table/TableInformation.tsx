import { IconMapPin,IconClock, IconPencil } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { RequestEntity } from "../../../utils/types";
import CreateRequestForm from "../../common/form/CreateRequestForm";
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
    mapSize : 'sm'
  });
  const [edit,setEdit] = useState<boolean>(true);
  return (
    <TableOthers>
      {
        !edit ? 
      <>
      {!request?.isMerged && <IconPencil id="edit" color="var(--dark-blue)" onClick={()=>setEdit(true)}/>}
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
      : <CreateRequestForm options={
        {mapSize : 'sm' , selectBird : false, isUpdate : true ,updateCancelHandle: ()=>setEdit(false)}
      } handleCreateRequest={(data)=>{
        // TODO : //Update request
        console.log(data)
      }}/>
      }
    </TableOthers>
  );
};

export default TableInformation;
