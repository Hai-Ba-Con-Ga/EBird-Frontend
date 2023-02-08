import React from 'react';
import { RoomCardWrapper } from './room.style';
interface Props {
    name : string
    onClick? : React.MouseEventHandler
}
const RoomCard :React.FC<Props> = ({
    name,
    onClick
})=> {
    return (<RoomCardWrapper  onClick={onClick}>{name}</RoomCardWrapper>)
}
export default RoomCard;