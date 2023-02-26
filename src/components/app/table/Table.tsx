import {
  IconChevronLeft,
  IconClock,
  IconMapPin,
  IconSend,
} from "@tabler/icons-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../auth/useAuth";
import useGoogleMap from "../../common/map/useGoogleMap";
import { MatchApi } from "../lobby/match.api";
import useRequest from "../lobby/useRequest";
import TableInformation from "./TableInformation";
import {
  BackButton,
  ChatBox,
  ChatFrame,
  ChatItem,
  ChatMessage,
  ConfirmButton,
  TableHeadline,
  TableInformationItem,
  TableInformations,
  TableMain,
  TableOpponents,
  TableOthers,
  TableTitle,
  TableWrapper,
  VsDividerTable,
} from "./table.style";
import TableBird from "./TableBird";
import TableChat from "./TableChat";
import { Chip } from "@mui/material";
import { RequestApi } from "../lobby/request.api";
import { RequestStatus } from "../../../utils/types";
export const MatchTable = () => {
  const { id } = useParams();
  const {
    auth: { userInfomation },
  } = useAuth();
  const [isMerged,setIsMerged] = useState<boolean>(false);
  const [requestDetail, setDetail] = useState<any>(null);
  const isOwner  = useMemo(()=> userInfomation?.id == requestDetail?.host?.id  ,[requestDetail]) 
  const { getRequestDetail } = useRequest();
  
  const nav = useNavigate();
  useEffect(() => {
    getRequestDetail(id ?? "").then((data) => setDetail(data));
  }, [id]);
  // *** hanler *//

  useEffect(() => {
    if(requestDetail?.status == RequestStatus.Closed){
      toast.warning("This request has been closed! Check your at your matches");
      nav("/app/match")      
    }
  }, [requestDetail]);
  const handleConfirmClick = useCallback(async () => {
    if (isOwner) {
      if(!requestDetail?.isReady) {
        toast.error("Your opponent is not ready");
        return;
      }
      const res = await MatchApi.createMatch({
        requestId : requestDetail?.id,
        userId : userInfomation?.id
      });
      if (res.success) {
        toast.success("Match is confirmed! Have fun. Remember to update result...");
        nav("/app/match");
      } else {
        toast.error("Your opponent is not ready yet!");
      }
    } else {
      const result = await RequestApi.requestReady(id as string);
      if (result) {
        toast.success("Ready for the match. Wait for host confirm");
      } else {
        console.error("Error :))) ");
      }
    }
  }, [isOwner,requestDetail]);
  return (
    <TableWrapper>
      <TableHeadline>
        <BackButton onClick={() => nav("/app/lobby")}>
          <IconChevronLeft color="var(--dark-green)" />
        </BackButton>
        <TableTitle>Request</TableTitle>
        <Chip component={'span'} label={'#'+requestDetail?.number} color={'success'} style={{fontWeight:600,fontSize: 'var(--text-xl)'}}/>
      </TableHeadline>
      <TableMain>
        <TableOpponents>
          <TableBird bird={requestDetail?.hostBird as any} />
          <VsDividerTable>Vs</VsDividerTable>
          <TableBird bird={requestDetail?.challengerBird as any} />
        </TableOpponents>
        <TableInformation request={requestDetail} reloadCallback={()=> getRequestDetail(id ?? "").then((data) => setDetail(data))}/>
        <TableChat a={{} as any}/>
      </TableMain>
      <ConfirmButton
        type="button"
        disabled={requestDetail?.matchStatus >= 2}
        onClick={handleConfirmClick}
      >
        {requestDetail?.matchStatus >= 2
          ? "On going"
          : isOwner
          ? "Confirm"
          : "Ready"}
      </ConfirmButton>
      
    </TableWrapper>
  );
};

export default MatchTable;