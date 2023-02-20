import { Bird } from 'mdi-material-ui'
import React from 'react'
import styled from 'styled-components'
import BirdCard from '../../../components/app/profile/BirdCard'

export const ProfileBirdPage = styled.div`
    padding : 3rem;
`

const ProfileBird = () => {
  return (
    <ProfileBirdPageWrapper>
        <FilterSidebar/>
        <BirdView>
            <BirdCard bird={{} as any}/>
            <BirdCard bird={{} as any}/>
            <BirdCard bird={{} as any}/>
            <BirdCard bird={{} as any}/>
        </BirdView>
    </ProfileBirdPageWrapper>
  )
}
export const ProfileBirdPageWrapper = styled.div`
    padding : 2rem;
    display : flex;
    height: 100%;
`

export const FilterSidebar = styled.div`
    flex : 0 0 20%;
    height: 100%;
`

export const BirdView = styled.div`
    flex : 1 1 80%;
    height: 100%;
    background-color:red;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(0,1fr);
    grid-gap: 0px;
`


export default ProfileBird