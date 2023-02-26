import { Chip } from '@mui/material'
import { IconBrandTwitter, IconClock, IconCoinEuro, IconMapPin } from '@tabler/icons-react'
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { RequestCardInfomationField } from '../../app/lobby/lobby.style'
import useAuth from '../../auth/useAuth'

type Props = {
    request: any
}

const SidebarRequestCard = ({request}: Props) => {
  const {auth : {userInfomation}} = useAuth();
  const nav = useNavigate();
  const myBird = useMemo(()=> request?.hostBird?.ownerId == userInfomation?.id ? request?.hostBird : request?.challengerBird,[request, userInfomation])
  return (
    <CardWrapper onClick={()=>nav("/app/lobby/table/"+request?.id)}>
      <CardHeadline>
        <Chip variant='filled' color='success'  label={'#'+request?.number} style={{fontWeight:600,height:'fit-content', padding : '.5rem 0.25rem'}}/>

        <Chip variant='filled' color='warning'  label={request?.status} style={{fontWeight:600,height:'fit-content', padding : '.5rem 0.25rem'}}/>
        
      </CardHeadline>
      <CardInformations>
        <RequestCardInfomationField style={{color:'var(--dark-blue)'}}>
          <IconMapPin color='var(--dark-blue)'/>
          <span >{request?.place?.name}</span>
        </RequestCardInfomationField>
        <RequestCardInfomationField style={{color:'var(--dark-blue)'}}>
          <IconClock color='var(--dark-blue)'/>
          <span >{request?.requestDatetime}</span>
        </RequestCardInfomationField>
        <RequestCardInfomationField style={{color:'var(--dark-blue)'}}>
          <IconBrandTwitter color='var(--dark-blue)'/>
          <span >{myBird?.name}</span>
        </RequestCardInfomationField>
        <RequestCardInfomationField style={{color:'var(--dark-blue)'}}>
          <IconCoinEuro color='var(--dark-blue)'/>
          <span >{myBird?.elo}</span>
        </RequestCardInfomationField>
      </CardInformations>
    </CardWrapper>
  )
}
const CardWrapper = styled.div`
    padding: 1rem;
    border-radius: var(--roundedSmall);
    background-color: var(--gold-secondary);
    margin : 1rem 0 ;
    cursor: pointer;
`
const CardHeadline = styled.div`
display: flex;
justify-content: space-between;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 0.5rem;
`
const CardInformations  = styled.div`
  margin-top : 1rem;
`
export default SidebarRequestCard