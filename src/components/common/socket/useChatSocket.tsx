
import React, { useCallback, useEffect, useState } from 'react'
import {io, Socket} from 'socket.io-client'
import {HubConnection, HubConnectionBuilder,HttpTransportType} from '@microsoft/signalr'
import useAuth from '../../auth/useAuth';
type Props = {
    host : string;
    path : string;
    params? : any;
}

const useChatSocket = ({host,path,params}: Props) => {
  const {
    auth: { userInfomation },
  } = useAuth();
    const [socket, setSocket] = useState<HubConnection>();
    useEffect(() => {
      //   const params = {userId: userInfomation?.id,
      // chatRoomId: }
      if(params?.chatRoomId && params?.userId){
        const newSocket = new HubConnectionBuilder().withUrl(`https://localhost:7137/hub/test?${new URLSearchParams(params).toString()}`,{
          transport: HttpTransportType.WebSockets,
          skipNegotiation : true,
          
        }).build();
        newSocket?.start(); 
        newSocket?.on('NewMessage',(...params)=>{
          console.log("Message Come in" , params);
        })
        setSocket(newSocket); 
      }
      }, []);
      // const getChatRoomId = useCallback(() => {
      //   const url = '/chat-room/create-private';
      //   const 
      // },[params.chatRoomId]);
      return socket;
}

export default useChatSocket