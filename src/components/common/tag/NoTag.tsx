import React from 'react'
import styled from 'styled-components'

type Props = {
    no : number | string
}

const NoTag = (props: Props) => {
  return (
        <TagWrapper>
            {props?.no || "Unknown"}
        </TagWrapper>
    )
}
const TagWrapper = styled.span`
    padding : 2rem;
    background-color: var(--green);
    color: var(--white);
    font-weight:600;
    font-size: var(--text-3xl);
`
export default NoTag