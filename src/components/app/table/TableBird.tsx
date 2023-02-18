import React, { useState } from "react";
import styled from "styled-components";
import { Bird } from "../../../utils/types";

type Props = {
  bird: Bird;
  kickable?: boolean;
};

export const TableBirdWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;
`;
export const BirdImage = styled.div`
  width: 40rem;
  aspect-ratio: 16/9;
  border-radius: var(--roundedSmall);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  overflow: hidden;
`;
export const BirdInformations = styled.div`
  font-size: var(--text-5xl);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-direction: column;
  & span:nth-child(1) {
    font-size: var(--text-9xl);
  }
`;
const WaitingMessage = styled.span`
  font-size: var(--text-5xl);
  background-color: var(--warning);
  color: var(--white);
  position: absolute;
  z-index: 5;
  right: 0;
  transform: translateX(100%);
  top: 0;
  padding: 0.5rem 2rem;
  border-radius: var(--roundedMedium) var(--roundedMedium) var(--roundedMedium)
    0;
  cursor: pointer;
`;
const TableBird = ({ bird, kickable }: Props) => {
  const [message, setMsg] = useState(true);
  return (
    <TableBirdWrapper>
      {!bird?.id && message && (
        <WaitingMessage onClick={() => setMsg(false)}>
          Waiting for someone join this request
        </WaitingMessage>
      )}
      <BirdImage>
        <img
          src={
            bird?.id
              ? "https://thucung.farmvina.com/wp-content/uploads/2019/12/chao-mao-hot-hay.jpg"
              : "https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png"
          }
          alt=""
        />
      </BirdImage>
      <BirdInformations>
        <span>{bird?.name || "Null"}</span>
        <span>{bird?.id ? "Chao mao" : "Null"}</span>
        <span>{bird?.ratio || "W:0 - L:0 - R:0%"}</span>
        <span>{bird?.elo || "NaN"}</span>
      </BirdInformations>
    </TableBirdWrapper>
  );
};

export default TableBird;
