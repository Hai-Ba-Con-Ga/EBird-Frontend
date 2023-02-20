
import React from 'react'
import styled from 'styled-components';
import { Bird } from '../../../utils/types'

type Props = {
    bird : Bird;
}
export const BirdCardWrapper = styled.div`
    width : 27.5rem;
    height : 37.5rem;
    padding : 0.5rem;
    background-color: green;
    border-radius: var(--roundedMedium);
`
const BirdCard = ({bird}: Props) => {
  return (
    <BirdCardWrapper >

    </BirdCardWrapper>
  )
}

export default BirdCard