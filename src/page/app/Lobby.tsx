import { IconRefresh } from '@tabler/icons-react'
import React, { useCallback, useEffect, useState } from 'react'
import { ActionArea, ActionButton, BackdropVideo, LobbyBackground, LobbyWrapper, PageMain, PageTitle, RequestActions, RequestGrid } from '../../components/app/lobby/lobby.style'
import RequestCard from '../../components/app/lobby/RequestCard'
import CreateRequestForm from '../../components/common/form/CreateRequestForm'
import useModal from '../../components/common/modal/useModal'
import Select from '../../components/common/select/Select'
import { DecorCircle } from '../../components/layout/layout.style'

const Lobby = () => {
  const requestFilter = [
    {name : 'ELO ASC' , value:  'elo_asc'},
    {name : 'ELO DESC' , value:  'elo_desc'},
    {name : 'ELO ASC' , value:  'elo_asc'},
    {name : 'ELO ASC' , value:  'elo_asc'},
    {name : 'ELO ASC' , value:  'elo_asc'},
    {name : 'ELO ASC' , value:  'elo_asc'},
  ]
  const {openModal} = useModal();
  const createRequestHandler = useCallback(()=>{
    openModal({
      closable : true,
      component : <CreateRequestForm/>,
      payload : null
    })
  },[]);
  return (
    <LobbyWrapper>
      {/* <BackdropVideo src="/smoke.mp4" muted autoPlay loop></BackdropVideo> */}
      <LobbyBackground/>
      <PageMain>
        <PageTitle>
          <h3>Lobby</h3>
          <button type='button'><IconRefresh color='var(--gold-primary)'/></button>
        </PageTitle>
        <RequestGrid>
          <RequestCard request={{} as any}/>
          <RequestCard request={{} as any}/>
          <RequestCard request={{} as any}/>
          <RequestCard request={{} as any}/>
          <RequestCard request={{} as any}/>
          <RequestCard request={{} as any}/>
          <RequestCard request={{} as any}/>
          <RequestCard request={{} as any}/>
          <RequestCard request={{} as any}/>
        </RequestGrid>
      </PageMain>
      <ActionArea>
        <RequestActions>
          <ActionButton>
            Quick Match
          </ActionButton>
          <ActionButton onClick={createRequestHandler}>
            Create Request
          </ActionButton>
        </RequestActions>
      </ActionArea>
      {/* <DecorCircle/> */}
    </LobbyWrapper>
  )
}

export default Lobby