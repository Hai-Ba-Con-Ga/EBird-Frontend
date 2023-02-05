import React, { memo } from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
    width:12rem;
    aspect-ratio: 1;
    background-color: blueviolet;
    border: 2px yellow solid;
    border-radius: var(--roundedFull);
    color: white;
    font-weight: 600;
    font-size: var(--text-3xl);
    &:hover {
        opacity: .98;
    }
`

const HeaderPlayButton = () => {
  return (
    <ButtonStyle>Find Request</ButtonStyle>
  )
}

export default memo(HeaderPlayButton)