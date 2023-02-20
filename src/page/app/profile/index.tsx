import { IconBrandTwitter, IconUserPlus } from '@tabler/icons-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CoverImage, HeadlineProfileWrapper, ImagesSection, ProfileAction, ProfileName, ProfilePageWrapper, UserAvatarWrapper } from '../../../components/app/profile/profile.style';
import useAuth from '../../../components/auth/useAuth'
import { ActionButton } from '../../../components/common/button/Button.style';


const ProfilePage = () => {
    const {auth : {userInfomation}} = useAuth();
    console.log(userInfomation);
    const nav = useNavigate();
  return (
    <ProfilePageWrapper>
        <ImagesSection>
            <CoverImage></CoverImage>
            <UserAvatarWrapper>
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </UserAvatarWrapper>
        </ImagesSection>
        <HeadlineProfileWrapper>
            <ProfileName>Thanh Phong</ProfileName>
            <ProfileAction>
                <ActionButton variant='lg'>
                    <IconBrandTwitter onClick={()=>nav('birds')}/>
                </ActionButton>
                <ActionButton variant='lg'>
                    <IconUserPlus/>
                </ActionButton>
                <ActionButton variant='lg'>
                    <IconUserPlus/>
                </ActionButton>
                <ActionButton variant='lg'>
                    <IconUserPlus/>
                </ActionButton>
            </ProfileAction>
        </HeadlineProfileWrapper>
    </ProfilePageWrapper>
  )
}

export default ProfilePage