import React from 'react'
import styled from 'styled-components'

type Props = {
    request: any
}

const SidebarRequestCard = (props: Props) => {
  return (
    <CardWrapper>SidebarRequestCard</CardWrapper>
  )
}
const CardWrapper = styled.div`
    padding: 1rem;
    border-radius: var(--roundedSmall);
    background-color: var(--gold-secondary);
`
export default SidebarRequestCard