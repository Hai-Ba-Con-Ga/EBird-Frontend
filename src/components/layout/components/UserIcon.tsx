// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import { SvgIconProps } from '@mui/material'

interface UserIconProps {
  iconProps?: SvgIconProps
  icon: string | ReactNode
}

const UserIcon = (props: UserIconProps) => {
  // ** Props
  const { icon, iconProps } = props

  const IconTag = icon as any

  const styles={
    color: 'inherit'
  }

  /* styles = {
    color: 'red',
    fontSize: '2rem'
  } 
  */


  return <IconTag {...iconProps} style={{ ...styles }} />
}

export default UserIcon
