import React from 'react'
import { LobbyBackground, LobbyWrapper, PageMain, PageTitle, RequestGrid } from '../../components/app/lobby/lobby.style'
import RequestCard from '../../components/app/lobby/RequestCard'
import { DecorCircle } from '../../components/layout/layout.style'


const Lobby = () => {
  return (
    <LobbyWrapper>
      {/* <LobbyBackground/> */}
      <PageMain>
        <PageTitle>
          Lobby
        </PageTitle>
        <RequestGrid>
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
          <RequestCard />
        </RequestGrid>
      </PageMain>
      {/* <DecorCircle/> */}
    </LobbyWrapper>
  )
}

export default Lobby