import React, { FC, memo, PropsWithChildren, useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ClientHeader from "../common/header/ClientHeader";
import { IconChevronsRight } from "@tabler/icons-react";
import {
  AppLayoutWrapper,
  AppContentWrapper,
  ScreenWrapper,
  SidebarWrapper,
  SidebarToggleButton,
  SidebarBackdrop,
  DecorCircle,
} from "./layout.style";
import useApp from "../app/common/useApp";
import useModal from "../common/modal/useModal";
import RoomSelectForm from "../app/room/RoomSelectForm";
import Sidebar from "../common/sidebar/Sidebar";
type Props = {
  yo?: any;
};

const AppLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const { currentBird, currentRoom } = useApp({useSelection:false});
  const { openModal } = useModal();
  useEffect(() => {
    if (!currentRoom) {
      openModal({
        payload: null,
        component: <RoomSelectForm />,
        closable: false,
      });
      console.log("no room", currentRoom);
    } else {
      console.log("room");
    }
  }, []);
  return (
    <AppLayoutWrapper>
      <ClientHeader></ClientHeader>
      <AppContentWrapper>
        <ScreenWrapper>{children}</ScreenWrapper>
        <SidebarWrapper className={`${toggle ? "sidebar-deactive" : ""} `}>
          <SidebarToggleButton onClick={() => setToggle(!toggle)}>
            <IconChevronsRight color="yellow" />
          </SidebarToggleButton>
          <SidebarBackdrop><Sidebar/></SidebarBackdrop>
        </SidebarWrapper>
      </AppContentWrapper>
    </AppLayoutWrapper>
  );
};

export default memo(AppLayout);
//TODO: check performance if not using memo
