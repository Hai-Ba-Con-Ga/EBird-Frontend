import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Account } from "../../../utils/types";
import { ButtonCommon } from "../../common/button/Button.style";
import { Avatar, UserAvatar,  UserShowWrapper } from "./addfriend.style";
import { useForm } from "react-hook-form";
export interface Props {
  user: Account;
}
const UserTab = ({user}:Props) => {
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    // console.log("user: ",user);
  }, [user]);
    return (
      <UserShowWrapper>
        <UserAvatar>
          <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNSuIiJCjxQ5gDnadu2n7QFDrDTcHvRH53OngpEKPcPRo6KUkOMJXXreesiUn5p-zka0&usqp=CAU"} alt="" />
        </UserAvatar>

        <UserInfo 
            onSubmit={handleSubmit(async (data) => {
              console.log("SEND FRIEND REQUEST"); 
            })
        } >
            <TheH1>Name: {user?.firstName} - {user?.lastName}</TheH1>
            <TheH1>Description: {user?.description}</TheH1>
            <TheH1>Email: {user?.email}</TheH1>
            <HeheButton type="submit">ADD FRIEND</HeheButton>
        </UserInfo>
      </UserShowWrapper>
    )


}

export default UserTab;

const TheH1 = styled.h1`
  font-size: 30px;
`;
export const UserInfo = styled(motion.form)`
  width: 70%;
  margin: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeheButton = styled.button`
  border-radius: 50px;
  background-color: var(--green);
  color: var(--white);
  font-size: var(--text-5xl);
  padding: 2rem 5rem;
  margin: 2rem;
`;

