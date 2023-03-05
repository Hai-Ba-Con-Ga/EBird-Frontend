// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
// ** Types Imports
import { ThemeColor } from '../../@core/layouts/types'
import { Checkbox, TablePagination } from '@mui/material'

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}



const statusObj: StatusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

interface TableProps {
  fieldNames: string[]
  renderTable?: () => JSX.Element [] | undefined;
  isSelect?: boolean;
  pagination: {
    onPageSizeChange: (event:any)=>void;
    onPageChange: (event:any, page: number)=>void;
    totalPages: number;
    currentPage: number;
    rowPerPage: number;
    totalItems: number;
  }
  onSelectAll : ()=>void;
  selectAllChecked: boolean
}

const DashboardTable:FC<PropsWithChildren<TableProps>> = ({children,fieldNames,renderTable,isSelect,pagination : {currentPage,totalPages,totalItems,onPageChange,onPageSizeChange,rowPerPage},selectAllChecked,onSelectAll}) => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              {isSelect && <TableCell style={{width:'2rem'}}><Checkbox checked={selectAllChecked} onChange={onSelectAll}/></TableCell>}
              {
                fieldNames.map((field,i) => <TableCell key={i}>{field}</TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {renderTable?.()}
            {children}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination component={"div"} count={totalItems || 10} page={currentPage} rowsPerPage={rowPerPage} onPageChange={onPageChange} onRowsPerPageChange={onPageSizeChange}/>
    </Card>
  )
}

export default DashboardTable
