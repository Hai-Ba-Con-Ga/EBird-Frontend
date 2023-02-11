import React,{useCallback,useEffect} from 'react'
import {useRecoilState} from "recoil"
import AppAtom from '../common/app.atom'
import { RoomApi } from './room.api'
import {setAppState} from "../../../utils/appCommon";

const useRoom = () => {
    const [app,setApp] = useRecoilState(AppAtom);
    const getAllRooms = useCallback(async()=> {
        const response = await RoomApi.getAllRooms();
        if(response.success) {
            return response.data
        }
        else return null;
    },[])
    useEffect(()=> {
        setAppState(app);

    },[app])
    const setCurrentRoom = async (currentRoom :any) => {
        setApp({...app,currentRoom : currentRoom});
    }
  return (
    { 
        getAllRooms,
        currentRoom : app.currentRoom,
        setCurrentRoom,
    }
    )
}

export default useRoom