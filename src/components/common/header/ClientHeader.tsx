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
  const [birds, setBirds] = useState<any[]>([]);
  // const [currentBirds, setCurrentBird] = useState<any>();
  const { setCurrentBird, currentBird } = useApp();
  const [test, setTest] = useState(false);
  useEffect(() => {
    axiosClient
      .get("/bird/owner")
      .then((res) => {
        return res.data.data;
      })
      .then((list) => {
        if (!currentBird) {
          setCurrentBird(list?.[0]);
        }
        setBirds(list);
      });
  }, []);
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
          <Select value={currentBird?.name} placeholder="Select">
            {birds &&
              birds?.map((bird, i) => (
                <SelectOption key={i} onClick={() => setCurrentBird(bird)}>
                  {bird?.name}
                </SelectOption>
              ))}
          </Select>
        </BirdSelectArea>
      </AppHeader>
    </ClientHeaderWrapper>
  );
};

export default ClientHeader;
