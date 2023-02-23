import { IconRefresh } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosClient from "../../api/axiosClient";
import useApp from "../../components/app/common/useApp";
import {
  ActionArea,
  ActionButton, BackdropVideo, LobbyBackground,
  LobbyWrapper,
  PageMain,
  PageTitle,
  RequestActions,
  RequestGrid
} from "../../components/app/lobby/lobby.style";
import { MatchApi } from "../../components/app/lobby/match.api";
import RequestCard from "../../components/app/lobby/RequestCard";
import useRequest from "../../components/app/lobby/useRequest";
import useAuth from "../../components/auth/useAuth";
import useModal from "../../components/common/modal/useModal";

const Lobby = () => {
  const {createRequestOpenModal,getAllRequest,requests} = useRequest(true);

  // const [requets, setMatches] = useState<any[]>([]);
  useEffect(() => {
    getAllRequest()
  }, []);
  
  return (
    <LobbyWrapper>
      {/* <BackdropVideo src="/smoke.mp4" muted autoPlay loop></BackdropVideo> */}
      <LobbyBackground />
      <PageMain>
        <PageTitle>
          <h3>Lobby</h3>
          <button type="button" onClick={() => getAllRequest()}>
            <IconRefresh color="var(--gold-primary)" />
          </button>
        </PageTitle>
        <RequestGrid>
          {requests?.map((request) => (
            <RequestCard key={request?.id} request={request as any} />
          ))}
        </RequestGrid>
      </PageMain>
      <ActionArea>
        <RequestActions>
          <ActionButton>Quick Match</ActionButton>
          <ActionButton onClick={createRequestOpenModal}>
            Create Request
          </ActionButton>
        </RequestActions>
      </ActionArea>
    </LobbyWrapper>
  );
};

export default Lobby;
