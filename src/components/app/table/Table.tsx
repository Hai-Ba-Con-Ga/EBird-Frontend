import {
  IconChevronLeft,
  IconClock,
  IconMapPin,
  IconSend,
} from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
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
export const MatchTable = () => {
  const { id } = useParams();
  const [isMerged,setIsMerged] = useState<boolean>(false);
  const [requestDetail, setDetail] = useState<any>(null);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [hostBird, setHostBird] = useState<any>(null);
  const [guestBird, setGuestBird] = useState<any>(null);
  const { getRequestDetail } = useRequest();
  const nav = useNavigate();
  const {
    auth: { userInfomation },
  } = useAuth();
  useEffect(() => {
    getRequestDetail(id ?? "").then((data) => setDetail(data));
  }, [id]);
  // *** hanler *//

  useEffect(() => {
    console.log(requestDetail);
  }, [requestDetail]);
  const handleConfirmClick = useCallback(async () => {
    if (isOwner) {
      console.log("Confirm implement");
      const res = await MatchApi.matchConfirm(id as string);
      if (res.success) {
        toast.success("Match is confirmed! Have fun. Remember to update...");
        nav("/app/match");
      } else {
        toast.error("Your opponent is not ready yet!");
      }
    } else {
      // const dbCheck = {}
      // const birds = dbCheck?.matchBirdList?.map((bird: any) => bird?.bird);
      // const guestBirdId = birds?.[1]?.id;
      // console.log(dbCheck);
      // console.log(birds);
      // console.log(guestBirdId);
      // const result = await MatchApi.matchReady({
      //   matchId: id as string,
      //   birdId: guestBirdId,
      // });
      // if (result) {
      //   toast.success("Ready for the match. Wait for host confirm");
      // } else {
      //   console.error("Error :))) ");
      // }
    }
  }, [isOwner]);
  return (
    <TableWrapper>
      <TableHeadline>
        <BackButton onClick={() => nav("/app/lobby")}>
          <IconChevronLeft color="var(--dark-green)" />
        </BackButton>
        <TableTitle>Request</TableTitle>
        <span>#{requestDetail?.number}</span>
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