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
  const { getAllRooms, setCurrentRoom } = useRoom();
  useEffect(() => {
    getAllRooms().then((rooms: any) => setRooms(rooms));
  }, []);

  return (
    <RoomSelectFormWrapper>
      <RoomSelectTitle>Select Room</RoomSelectTitle>
      <RoomCardList>
        {rooms?.map((room) => (
          <RoomCard
            name={room?.name}
            onClick={() => setCurrentRoom(room)}
            key={room?.id}
          />
        ))}
      </RoomCardList>
    </RoomSelectFormWrapper>
  );
};

export default RoomSelectForm;
