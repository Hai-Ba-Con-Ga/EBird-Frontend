import { IconRefresh } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosClient from "../../api/axiosClient";
import useApp from "../../components/app/common/useApp";
import {
  ActionArea,
  ActionButton, LobbyBackground,
  LobbyWrapper,
  PageMain,
  PageTitle,
  RequestActions,
  RequestGrid
} from "../../components/app/lobby/lobby.style";
import { MatchApi } from "../../components/app/lobby/match.api";
import RequestCard from "../../components/app/lobby/RequestCard";
import useAuth from "../../components/auth/useAuth";
import CreateRequestForm from "../../components/common/form/CreateRequestForm";
import useModal from "../../components/common/modal/useModal";

const Lobby = () => {

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
      console.log(data);
      const { userInfomation } = auth;
      if (!currentBird) {
        toast.error("Please select bird");
      } else {
        const place = data.location
        const params = {
          matchStatus: 0,
          matchDatetime: data.date,
          hostId: userInfomation?.id,
          hostBirdId: currentBird?.id,
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
    <LobbyWrapper>
      {/* <BackdropVideo src="/smoke.mp4" muted autoPlay loop></BackdropVideo> */}
      <LobbyBackground />
      <PageMain>
        <PageTitle>
          <h3>Lobby</h3>
          <button type="button" onClick={() => getListMatch()}>
            <IconRefresh color="var(--gold-primary)" />
          </button>
        </PageTitle>
        <RequestGrid>
          {matches?.map((match) => (
            <RequestCard key={match?.id} request={match as any} />
          ))}
        </RequestGrid>
      </PageMain>
      <ActionArea>
        <RequestActions>
          <ActionButton>Quick Match</ActionButton>
          <ActionButton onClick={createRequestHandler}>
            Create Request
          </ActionButton>
        </RequestActions>
      </ActionArea>
      {/* <DecorCircle/> */}
    </LobbyWrapper>
  );
};

export default Lobby;
