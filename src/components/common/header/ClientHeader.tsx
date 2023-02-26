import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../api/axiosClient";
import useApp from "../../app/common/useApp";
import useAuth from "../../auth/useAuth";
import HeaderPlayButton from "../button/HeaderPlayButton";
import Select from "../select/Select";
import { SelectOption } from "../select/Select.style";
import {
  AppHeader,
  AppLogo,
  BirdSelectArea,
  ClientHeaderWrapper,
  LogoWrapper,
  MainNavigationBar,
  NavBarItem,
} from "./Header.style";

// type Props = {}

const ClientHeader = () => {
  const { setCurrentBird, currentBird ,SelectBird} = useApp({useSelection : true});
  return (
    <ClientHeaderWrapper>
      <AppHeader>
        <AppLogo>
          <NavBarItem to={"/app"}>
            <LogoWrapper>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3418/3418582.png"
                alt="logo"
              />
            </LogoWrapper>
          </NavBarItem>
        </AppLogo>
        <MainNavigationBar>
          <NavBarItem to={"/app/profile"}>Profile</NavBarItem>
          <NavBarItem to={"/app/group"}>Group</NavBarItem>
          <NavBarItem to={"/app/lobby"} className="nav-play-button">
            <HeaderPlayButton type="button">Find request</HeaderPlayButton>
          </NavBarItem>
          <NavBarItem to={"/app/ranking"}>Ranking</NavBarItem>
          <NavBarItem to={"/app/match"}>Match</NavBarItem>
        </MainNavigationBar>
        <BirdSelectArea>
          {SelectBird}
        </BirdSelectArea>
      </AppHeader>
    </ClientHeaderWrapper>
  );
};

export default ClientHeader;
