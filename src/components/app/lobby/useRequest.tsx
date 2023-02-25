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
import { PlaceApi } from "../../common/map/place.api";
import { MatchApi } from "./match.api";

const useRequest = (init?: boolean) => {
  const auth = useRecoilValue(authAtom);
  const appState = useRecoilValue(AppAtom);
  const {currentBird} = useApp({useSelection:false});
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
      component: (
        <CreateRequestForm
          options={{
            mapSize: "default",
            selectBird: true,
            isUpdate: false,
          }}
          handleCreateRequest={createRequest}
        />
      ),
      payload: null,
    });
  }, [appState, auth]);
  const getAllRequest = useCallback(() => {
    // TODO: wait for BFCS-153
    if (init) {
      RequestApi.getAllRequest({ roomId: "" }).then((response) =>
        setRequests(response.data)
      );
    }
  }, []);
  /** Join request */
  const joinRequest = useCallback(
    async (requestId: string) => {
      const currentBird: Bird | undefined = appState?.currentBird;
      console.log(currentBird);
      if (currentBird) {
        const result = await RequestApi.joinRequest({
          challengerBirdId: currentBird.id,
          requestId,
        });
        if (result.success) {
          nav("/app/lobby/table/" + requestId);
          toast.success("Joined successfully");
        } else {
          toast.error(result.message);
        }
      } else {
        toast.error("Please select a bird to join");
      }
    },
    [currentBird]
  );
  /** Get request detail/table */
  const getRequestDetail = useCallback(async (requestId: string) => {
    const response = await RequestApi.getRequestDetail(requestId);
    if (response.success) {
      return response.data;
    } else {
      toast.error("This request did not exist no more!");
      nav("/app/lobby");
    }
  }, []);

  /** Update Request */
  const updateRequest = useCallback(
    async (params: CreateRequestFormValues, request: any, reloadCallback : ()=>void) => {
      const requestParams: {
        placeId: string;
        hostBirdId: string;
        requestDatetime: string;
        requestId: string;
      } = {
        placeId: request.place.id,
        hostBirdId: params.currentBirdId,
        requestDatetime: params?.date?.toString()??request?.requestDatetime,
        requestId: request.id,
      };
      console.log("Not Same" ,isSamePlace({ place: params.location, place2: request.place }));
      
      if (!isSamePlace({ place: params.location, place2: request.place })) {
        const respData = await PlaceApi.createPlace(params.location);
        requestParams.placeId = respData.data;
        console.log("location",respData);
      }
      requestParams.requestDatetime = params.date.toLocaleString();
      const updateResult = await RequestApi.updateRequest(requestParams);
      if(updateResult.success){
        toast.success("Update information successfully");
      }else{
        toast.error("Error updating information");
      }
      reloadCallback()
    },
    []
  );
  /* Quick match */
  const quickMatchRequestModal = useCallback(()=> {
    openModal({
      closable: true,
      component: (
        <CreateRequestForm
          options={{
            mapSize: "default",
            selectBird: true,
            isUpdate: false,
          }}
          handleCreateRequest={async(data)=>{
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
      if(result.success) {
        const requestId = result.data.id;
        const matchedMatches = (await RequestApi.quickMatchRequest(requestId )).data;
        if(matchedMatches.length > 0) {
          // TODO : // merge request with existing ; if merge request is ok then nav to table
          
        }
        else {
          toast.warning("Not found any matches for request");
        }

      }else {
        toast.error("Create request failed");
      }
          }}
        />
      ),
      payload: null,
    });
  },[appState, auth])

  /** Confirm request -> create match  */ 
  const confirmRequest = useCallback(async(requestId : string)=>{
    const response = await MatchApi.createMatch({requestId});
    if(response.success) {
     console.log(response.data);
     nav("/app/match");
    } else {
      toast.error(response.message);
    }
  },[auth])
  return {
    createRequest,
    createRequestOpenModal,
    getAllRequest,
    requests,
    joinRequest,
    getRequestDetail,
    updateRequest,
    quickMatchRequestModal,
    confirmRequest,
  };
};
function isSamePlace({ place, place2 }: any) {
  console.log("Place 1",place);
  console.log("Place 2",place2);
  
  return (
    place.latitude == place2.latitude && place.longitude == place2.longitude
  );
}

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
