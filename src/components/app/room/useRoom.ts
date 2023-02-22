import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import AppAtom from "../common/app.atom";
import { RoomApi } from "./room.api";
import { setAppState } from "../../../utils/appCommon";
import { toast } from "react-toastify";
import useModal from "../../common/modal/useModal";

const useRoom = () => {
  const [app, setApp] = useRecoilState(AppAtom);
  const { closeModal } = useModal();

  const getAllRooms = useCallback(async () => {
    const response = await RoomApi.getAllRooms();
    if (response.success) {
      return response.data;
    } else return null;
  }, []);
  useEffect(()=> {
     console.log(app)
  },[app])
  const setCurrentRoom = async (currentRoom: any) => {
    console.log(currentRoom);
    setApp({ ...app, currentRoom: currentRoom });
    toast.success(`You changed to room ${currentRoom?.name} `);
    closeModal();
  };
  return {
    getAllRooms,
    currentRoom: app.currentRoom,
    setCurrentRoom,
  };
};

export default useRoom;
