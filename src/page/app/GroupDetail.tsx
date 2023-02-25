import { IconRefresh, IconSend } from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosClient from "../../api/axiosClient";
import useApp from "../../components/app/common/useApp";
import { ChatGroup,
  GroupDetailMainContent,
  GroupDetailWrapper,
  Match,
  Online,
  OnlineMember,
  RequestGridGroupPage,
  MatchArea,
  MatchTitle,
  ChatFrame,
  ChatBox,
  ChatItem,
  ChatMessage,
  
} from "../../components/app/group/grouppage.style";
import {
  ActionArea,
  ActionButton,
  BackdropVideo,
  LobbyBackground,
  LobbyWrapper,
  PageTitle,
  RequestActions,
  RequestGrid,
} from "../../components/app/lobby/lobby.style";
import { MatchApi } from "../../components/app/lobby/match.api";
import RequestCard from "../../components/app/lobby/RequestCard";
import useAuth from "../../components/auth/useAuth";
import CreateRequestForm from "../../components/common/form/CreateRequestForm";
import useModal from "../../components/common/modal/useModal";
import Select from "../../components/common/select/Select";
import { DecorCircle } from "../../components/layout/layout.style";

const Lobby = () => {
  const requestFilter = [
    { name: "ELO ASC", value: "elo_asc" },
    { name: "ELO DESC", value: "elo_desc" },
    { name: "ELO ASC", value: "elo_asc" },
    { name: "ELO ASC", value: "elo_asc" },
    { name: "ELO ASC", value: "elo_asc" },
    { name: "ELO ASC", value: "elo_asc" },
  ];
  const { openModal, closeModal } = useModal();
  const { currentRoom, currentBird } = useApp();

  const createRequestHandler = useCallback(() => {
    openModal({
      closable: true,
      component: (
        <CreateRequestForm handleCreateRequest={handleCreateRequest} />
      ),
      payload: null,
    });
  }, []);
  const { auth } = useAuth();

  const handleCreateRequest = useCallback(
    async (data: any) => {
      console.log("submit create request");
      const { userInfomation } = auth;
      if (!currentBird) {
        toast.error("Please select bird");
      } else {
        const place = {
          address: "Default",
          name: data.location,
          longitude: "null",
          latitude: "null",
        };
        const params = {
          matchStatus: 0,
          matchDatetime: data?.time,
          hostId: userInfomation?.id,
          birdHostId: currentBird?.id,
          roomId: currentRoom?.id,
          place,
        };
        const result = await MatchApi.createMatch(params);
        console.log("Create match result = ", result);
        if (result.success) {
          toast.success(
            "Create match successfully! Refresh list manually please"
          );
          getListMatch();
          closeModal();
        }
        // console.log(params);
      }
    },
    [currentBird, auth, currentRoom]
  );
  const [matches, setMatches] = useState<any[]>([]);
  useEffect(() => {
    getListMatch();
  }, []);
  const getListMatch = useCallback(async () => {
    const params = {
      MatchStatus: 0,
    };
    const result = (await axiosClient
      .get("/match/all", {
        params,
      })
      .then((res) => res.data)) as any;
    if (result.success) {
      setMatches(result.data);
      console.log(result.data);
    }
  }, [matches]);
  return (
    <GroupDetailWrapper>
      <LobbyBackground />
      <GroupDetailMainContent>

        <Online>
          <OnlineMember><h1>Online Member</h1></OnlineMember>

          <ChatFrame>
              <ChatBox>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
              <ChatItem>
                <span>WyvernP</span>
                <span>
                  Hello Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. 
                </span>
              </ChatItem>
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
              <h3>GROUP DETAIL</h3>
              <button type="button" onClick={() => getListMatch()}>
                <IconRefresh color="var(--gold-primary)" />
              </button>
            </MatchTitle>
            <RequestGridGroupPage>
              {/* {matches?.map((match) => (
                <RequestCard key={match?.id} request={match as any} />
              ))} */}
              <RequestCard request={{} as any} />
              <RequestCard request={{} as any} />
              <RequestCard request={{} as any} />
              <RequestCard request={{} as any} />
            </RequestGridGroupPage>
          </MatchArea>

          <ActionArea>
            <RequestActions>
              
              <ActionButton onClick={createRequestHandler}>
                Create Request
              </ActionButton>
            </RequestActions>
          </ActionArea>
        </Match>
      </GroupDetailMainContent>

      
    </GroupDetailWrapper>
  );
};

export default Lobby;
