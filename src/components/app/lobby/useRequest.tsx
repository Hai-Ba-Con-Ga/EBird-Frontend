import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { Bird, RequestTime } from "../../../utils/types";
import { CreateRequestParams } from "../../../utils/types/api/params";
import authAtom from "../../auth/AuthAtom";
import useAuth from "../../auth/useAuth";
import useModal from "../../common/modal/useModal";
import AppAtom from "../common/app.atom";
import useApp from "../common/useApp";
import { RequestApi } from "./request.api";
import CreateRequestForm from "../../common/form/CreateRequestForm";
import { useNavigate } from "react-router-dom";

const useRequest = (init? :boolean) => {
  const auth = useRecoilValue(authAtom);
  const appState = useRecoilValue(AppAtom);
  const { openModal, closeModal } = useModal();
  const [requests, setRequests] = useState<any[]>([]);
  const nav = useNavigate();
  const createRequest = useCallback(
    async (data: CreateRequestFormValues) => {
      const { userInfomation } = auth;
      const place = data.location;
      const params: CreateRequestParams = {
        requestDatetime: data.date,
        hostId: userInfomation?.id,
        hostBirdId: data.currentBirdId || (appState.currentBird?.id as string),
        roomId: appState.currentRoom?.id as string,
        place,
      };

      const result = await RequestApi.createRequest(params);
      console.log("Create match result = ", result);
      if (result.success) {
        toast.success(
          "Create match successfully! Refresh list manually please"
        );
        // TODO : Refresh list manually || socket
        closeModal();
      } else {
        toast.error("Create request failed! Check again later");
      }
    },
    [appState, auth]
  );

  const createRequestOpenModal = useCallback(() => {
    openModal({
      closable: true,
      component: <CreateRequestForm handleCreateRequest={createRequest} />,
      payload: null,
    });
  }, [appState, auth]);
  const getAllRequest = useCallback(() => {
    // TODO: wait for BFCS-153
    if(init) {
      RequestApi.getAllRequest({ roomId: "" }).then((response) =>
      setRequests(response.data)
      );
    }
  }, []);
  /** Join request */
  const joinRequest = useCallback(
    async (requestId: string) => {
      const currentBird: Bird | undefined = appState?.currentBird;
      if (currentBird) {
        const result = await RequestApi.joinRequest({
          challengerBirdId: currentBird.id,
          requestId,
        });
        if(result.success) {
          nav("/app/lobby/table/" + requestId);
          toast.success("Joined successfully");
        } else {
          toast.error(result.message);
        }
      } else {
        toast.error("Please select a bird to join");
      }
    },
    [appState]
  );
  /** Get request detail/table */
  const getRequestDetail = useCallback( async (requestId: string)=> {
      const response = await RequestApi.getRequestDetail(requestId);
      if(response.success) {
        return response.data;
      }else {
        toast.error('This request did not exist no more!');
        nav('/app/lobby');
      }
  },[])
  return {
    createRequest,
    createRequestOpenModal,
    getAllRequest,
    requests,
    joinRequest,
    getRequestDetail
  };
};

type CreateRequestFormValues = {
  date: Date | string;
  time: RequestTime;
  location: {
    name: string;
    address: string;
    longitude: number;
    latitude: number;
  };
  currentBirdId: string;
};
export default useRequest;
