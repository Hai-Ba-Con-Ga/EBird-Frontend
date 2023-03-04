import React, { useState } from "react";
import Select from "../../common/select/Select";
import { SelectOption } from "../select/Select.style";
// import { TextFieldBlock } from "../../common/form/TextField";
import useModal from "../modal/useModal";
import RoomSelectForm from "../../app/room/RoomSelectForm";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axiosClient from "../../../api/axiosClient";
import { toast } from "react-toastify";
import useQuery from "../../../api/useQuery";
import useAuth from "../../auth/useAuth";
import { ButtonCommon } from "../button/Button.style";

const languages: string[] = [
    "English",
    "Vietnamese",
    "Japanese",
    "Korean"
];

const SettingsForm = () => {
    const {logout} = useAuth()
  const { openModal } = useModal();
  const [language, setLanguage] = useState<string>("English");
  
  const handleLanguage = (language: string) => {
    setLanguage(language)
    console.log(language);  
  };

  const handleChangeRoom = () => {
    openModal({
      payload: null,
      component: <RoomSelectForm/>,
      closable: false,
    });
    console.log("change room");
  };
  return (
    <div>
      <SettingsTitle>SETTINGS</SettingsTitle>
      <LanguageArea>
        <label htmlFor="">Language</label>
        <Select placeholder={language} >
            {languages.map((language, i) => (
              <SelectOption key={i} onClick={() => handleLanguage(language)}>
                {language}
              </SelectOption>
            ))}
          </Select>
      </LanguageArea>
      <ButtonArea>
        <ActionButton onClick={handleChangeRoom}>Change Room</ActionButton>
        <ActionButton onClick={logout}>Log out</ActionButton>
      </ButtonArea>
      
    </div>
  );
};
export default SettingsForm;

const SettingsTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  text-shadow: 1px 1px 2px #ccc;
  margin-top: 50px;
`;
const ActionButton = styled(ButtonCommon)`
  border-radius: var(--roundedSmall);
  background-color: var(--gold-primary);
  color: var(--white);
  font-size: var(--text-5xl);
  padding: 3rem 6rem;
  margin: 2rem;
`;
const ButtonArea = styled.div`
  text-align: center;
`;
export const LanguageArea = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem ;
  margin-top:1rem;
  position: relative;
  place-items: center; 
  margin-top: -1.5rem;
  label {
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: 600;
  }
`;