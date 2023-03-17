import { IconRefresh, IconSend } from "@tabler/icons-react";
import {
  ChatBox, ChatFrame, ChatItem,
  ChatMessage, GroupDetailMainContent,
  GroupDetailWrapper,
  Match, MatchArea,
  MatchTitle, Online,
  OnlineMember,
  RequestGridGroupPage
} from "../../components/app/group/grouppage.style";
import {
  ActionArea,
  ActionButton, LobbyBackground, RequestActions
} from "../../components/app/lobby/lobby.style";
import RequestCard from "../../components/app/lobby/RequestCard";
import useRequest from "../../components/app/lobby/useRequest";
import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import useGroupPage from "../../components/app/group/useGroup";
import { Group } from "../../utils/types";
const GroupDetailPage = () => {
  const {id} = useParams();
  console.log(id);
  
  const {createRequestOpenModal} = useRequest(false);
  const [groupRequests,setGroupRequests] = useState<any[]>();
  const {getGroupRequest,GetGroupDetail}  = useGroupPage(false);
  const [groupDetail,setGroupDetail] =useState<Group>();
  useEffect(()=>{
    if(id){
      GetGroupDetail(id).then(groupDetail => setGroupDetail(groupDetail));
    }
  },[id])
  useEffect(()=>{
    getGroupRequest(id as string).then(requests => setGroupRequests(requests));
  },[])
  return (
    <GroupDetailWrapper>
      <LobbyBackground />
      <GroupDetailMainContent>

        <Online>
          <OnlineMember><h1>Online Member</h1></OnlineMember>
          <ChatFrame>
              <ChatBox>

              </ChatBox>
              
            <ChatMessage>
              <input type="text" placeholder="Type something..." />
              <IconSend />
            </ChatMessage>
          </ChatFrame>
          
          
        </Online>

        <Match>
          <MatchArea>
            <MatchTitle>
              <h3>{groupDetail?.name} | {`${groupDetail?.minELO} - ${groupDetail?.maxELO}`}</h3>
              <button type="button" onClick={()=> getGroupRequest(id as string).then(requests => setGroupRequests(requests))}>
                <IconRefresh color="var(--gold-primary)" />
              </button>
            </MatchTitle>
            <RequestGridGroupPage>
              {groupRequests?.map((request) => (
                <RequestCard key={request?.id} request={request as any} />
              ))}
              {/* <RequestCard request={{} as any} /> */} 
            </RequestGridGroupPage>
          </MatchArea>
          <ActionArea>
            <RequestActions>
              <ActionButton onClick={()=> createRequestOpenModal(id)}>
                Create Request
              </ActionButton>
            </RequestActions>
          </ActionArea>
        </Match>
      </GroupDetailMainContent>

      
    </GroupDetailWrapper>
  );
};

export default GroupDetailPage;
