import { IconRefresh } from "@tabler/icons-react";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { MatchApi } from "../lobby/match.api";
import { MyMatchTitle, MyMatchWrapper } from "./match.style";
import MatchCard from "./MatchCard";

const MyMatch = () => {
  const [myMatch, setMyMatch] = useState<any[]>([]);
  useEffect(() => {
    getMyMatch();
  }, []);
  const getMyMatch = useCallback(
    async (replace = true) => {
      const res = await MatchApi.getMatchFilter({
        role: "host",
        matchStatus: "during",
      });
      const res2 = await MatchApi.getMatchFilter({
        role: "challenger",
        matchStatus: "during",
      });
      if (replace) {
        setMyMatch([...res.data, ...res2.data]);
      } else {
        setMyMatch([...myMatch, ...res.data, ...res2.data]);
      }
    },
    [myMatch]
  );
  return (
    <MyMatchWrapper>
      <ReloadButton
        onClick={() => {
          getMyMatch();
        }}
      >
        <IconRefresh />
      </ReloadButton>
      <MyMatchTitle>My Match</MyMatchTitle>
      <MatchList>
        {myMatch?.map((match) => (
          <MatchCard key={match?.id} match={match} />
        ))}
      </MatchList>
    </MyMatchWrapper>
  );
};
const ReloadButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;
  color: var(--dark-blue);
  svg {
    scale: 1.5;
  }
`;

const MatchList = styled.div`
  width: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;
export default MyMatch;
