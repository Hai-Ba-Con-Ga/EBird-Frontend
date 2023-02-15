import { IconChevronLeft, IconChevronUpLeft } from '@tabler/icons-react';
import React from 'react'
import styled from 'styled-components';
import { TableHeadline, TableTitle, TableWrapper } from './table.style';
import TableBird from './TableBird';

export const BackButton = styled.button`
  padding: .25rem;
  aspect-ratio: 1;
  border: 2px solid var(--dark-green);
  border-radius: var(--roundedFull);
  svg {
    transform: translateX(-1px);
  }
`

const MatchTable = () => {
  return (
    <TableWrapper>
      <TableHeadline>
        <BackButton>
          <IconChevronLeft color="var(--dark-green)" />
        </BackButton>
        <TableTitle>Table</TableTitle>
      </TableHeadline>
        <TableBird bird={{} as any} />
      Table
    </TableWrapper>
  );
}

export default MatchTable;