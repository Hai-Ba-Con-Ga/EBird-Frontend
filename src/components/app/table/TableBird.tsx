import React from 'react'
import styled from 'styled-components'
import { Bird } from '../../../utils/types'

type Props = {
    bird: Bird
    kickable?: boolean
}

export const TableBirdWrapper = styled.div`
    display: flex;
    gap : 2rem;
    align-items: center;
`
export const BirdImage = styled.div`
    width: 20rem;
    aspect-ratio: 1;
    border-radius:var(--roundedFull);
    img {width: 100%;
    height: 100%;
    object-fit: cover;}
    overflow: hidden;
`
export const BirdInformations = styled.div`
    font-size: var(--text-5xl);
    display: flex;
    align-items:center;
    gap: 0.75rem;
    flex-direction: column;
`
const TableBird = ({bird,kickable}: Props) => {
  return (
    <TableBirdWrapper>
        <BirdImage>
            <img src="https://source.unsplash.com/random" alt="" />
        </BirdImage>
        <BirdInformations>
            <span>Bird Name</span>
            <span>Bird type</span>
            <span>Ratio</span>
            <span>ELO</span>
        </BirdInformations>
    </TableBirdWrapper>
  )
}

export default TableBird;