import React from 'react'
import { UserFullname, UserFunctionItem, UserFunctionsList, UserMenuAvatar, UserMenuDropdown, UserMenuWrapper } from './Header.style'


const UserMenu = () => {
  return (
    <UserMenuWrapper>
        <UserMenuAvatar>
            <img src="https://source.unsplash.com/random" alt="" />
        </UserMenuAvatar>
        <UserMenuDropdown>
        <UserFullname>Thanh Phong</UserFullname>
        <UserFunctionsList>
            <UserFunctionItem>Profile</UserFunctionItem>
            <UserFunctionItem>Setting</UserFunctionItem>
            <UserFunctionItem>Logout</UserFunctionItem>
        </UserFunctionsList>
        </UserMenuDropdown>
    </UserMenuWrapper>
  )
}

export default UserMenu