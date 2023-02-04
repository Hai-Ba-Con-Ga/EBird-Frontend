import React, { FC, PropsWithChildren } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ClientHeader from "../common/header/ClientHeader";
import { AppLayoutWrapper, AppContentWrapper } from "./layout.style";
type Props = {
  yo?: any;
};

const AppLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <AppLayoutWrapper>
      <ClientHeader></ClientHeader>
      <AppContentWrapper>{children}</AppContentWrapper>
    </AppLayoutWrapper>
  );
};

export default AppLayout;
