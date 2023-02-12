import { IconClock, IconLocation, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import { Bird, MatchRequest } from '../../../utils/types'
import { BirdImage, BirdInformations, RequestBirdContainer, RequestBirdWrapper, RequestCardInfomationField, RequestCardWrapper } from './lobby.style'

const RequestCard = ({request } : {
    request: MatchRequest
}) => {
  return (
    <RequestCardWrapper>
      <RequestCardInfomationField>
        <IconMapPin/>
        <span>{request?.place || "Somewhere on earth"}</span>
      </RequestCardInfomationField>
      <RequestCardInfomationField>
        <IconClock/>
        <span>{request?.time  || "00:00"}</span>
      </RequestCardInfomationField>
      <RequestBirdContainer>

      <RequestBird bird={request?.primaryBird} isOwner={true}/> 
      <RequestBird bird={request?.secondaryBird} isOwner={false}/> 
      </RequestBirdContainer>
      RequestCard</RequestCardWrapper>
  )
}
const RequestBird = ({bird,isOwner}:{bird: Bird,isOwner : boolean}) => {
    return <RequestBirdWrapper isOwner={isOwner}>
      <BirdImage> <img src="https://source.unsplash.com/random" alt="" srcSet="https://source.unsplash.com/random" /></BirdImage>
      <BirdInformations isOwner={isOwner}>
        <h1>Louis Vuitton</h1>
        <h1>ELO</h1>
        <h1>Owner</h1>
      </BirdInformations>
    </RequestBirdWrapper> 
}
export default RequestCard