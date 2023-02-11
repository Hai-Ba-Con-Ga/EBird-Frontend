import React, { useEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";
import useAuth from "../../auth/useAuth";
import HeaderPlayButton from "../button/HeaderPlayButton";
import Select from "../select/Select";
import { SelectOption } from "../select/Select.style";
import { AppHeader, AppLogo, BirdSelectArea, ClientHeaderWrapper, LogoWrapper, MainNavigationBar, NavBarItem } from "./Header.style";

// type Props = {}


const ClientHeader = () => {
  const [birds,setBirds] = useState<any[]>([])
  const {auth} = useAuth();
  const [currentBirds,setCurrentBird]= useState<any>();
  const [test,setTest] = useState(false);
  useEffect(()=>{
    axiosClient.get("/bird/owner").then(resp => {
        setBirds(resp.data?.data)
        console.log(resp.data.data)
    })
  },[test])

  return <ClientHeaderWrapper>
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
        <NavBarItem to={"/app/profile"} >Profile</NavBarItem>
        <NavBarItem to={"/app/group"} >Group</NavBarItem>
        <NavBarItem to={"#"}  onClick={()=>setTest(!test)} className="nav-play-button"><HeaderPlayButton/></NavBarItem>
        <NavBarItem to={"/app/ranking"} >Ranking</NavBarItem>
        <NavBarItem to={"/app/match"} >Match</NavBarItem>
      </MainNavigationBar>
      <BirdSelectArea>
        <Select value={currentBirds?.name} placeholder="Select" >
        {birds && birds?.map((bird,i)=><SelectOption key={i} onClick={()=>setCurrentBird(bird)}>{bird?.name}</SelectOption>)}
          </Select> 
      </BirdSelectArea>
    </AppHeader>
  </ClientHeaderWrapper>;
};

export default ClientHeader;
