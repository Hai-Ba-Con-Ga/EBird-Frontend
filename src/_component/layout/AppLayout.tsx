import React, { FC, memo, PropsWithChildren, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ClientHeader from "../common/header/ClientHeader";
import {IconChevronsRight} from "@tabler/icons-react"
import { AppLayoutWrapper, AppContentWrapper, ScreenWrapper, SidebarWrapper, SidebarToggleButton } from "./layout.style";
type Props = {
  yo?: any;
};

const AppLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <AppLayoutWrapper>
     
      <ClientHeader></ClientHeader>
      <AppContentWrapper>
        <ScreenWrapper>
        {children}
        </ScreenWrapper>
        <SidebarWrapper className={`${toggle ? "sidebar-deactive" : ""} `}>
          <SidebarToggleButton onClick={()=>setToggle(!toggle)}>
            <IconChevronsRight color="yellow"/>
          </SidebarToggleButton>
          Content
        </SidebarWrapper>
        </AppContentWrapper>
    </AppLayoutWrapper>
  );
};

export default memo(AppLayout);
//TODO: check performance if not using memo