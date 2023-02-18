import React, { useState, useEffect, useCallback } from "react";
import useModal from "../../common/modal/useModal";
import {
  RoomCardList,
  RoomSelectFormWrapper,
  RoomSelectTitle,
} from "./room.style";
import RoomCard from "./RoomCard";
import useRoom from "./useRoom";
import { toast } from "react-toastify";

const RoomSelectForm = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  const { currentRoom, getAllRooms, setCurrentRoom } = useRoom();
  const { closeModal } = useModal();
  useEffect(() => {
    getAllRooms().then((rooms: any) => setRooms(rooms));
  }, []);
  useEffect(() => {
    console.log("Current room changed", currentRoom);
  }, [currentRoom]);
  const onSelectRoom = useCallback((room: any) => {
    setCurrentRoom(room);
    toast.success(`You changed to room ${room?.name} `);
    closeModal();
  }, []);
  return (
    <RoomSelectFormWrapper>
      <RoomSelectTitle>Select Room</RoomSelectTitle>
      <RoomCardList>
        {rooms?.map((room) => (
          <RoomCard
            name={room?.name}
            onClick={() => onSelectRoom(room)}
            key={room?.id}
          />
        ))}
      </RoomCardList>
    </RoomSelectFormWrapper>
  );
};

export default RoomSelectForm;
