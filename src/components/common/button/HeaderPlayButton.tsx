import React, { memo } from 'react'
import styled from 'styled-components'

const HeaderPlayButton = styled.button`
    width:12rem;
    aspect-ratio: 1;
    background-color: var(--green);
    border: 2px var(--dark-green) solid;
    border-radius: var(--roundedFull);
    color: white;
    font-weight: 600;
    font-size: var(--text-3xl);
    &:hover {
        opacity: .98;
    }
`

// const HeaderPlayButton = () => {
//   return (
//     <ButtonStyle>Find Request</ButtonStyle>
//   )
// }

export default HeaderPlayButton