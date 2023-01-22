import React, { FC, PropsWithChildren } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ClientHeader from "../common/header/ClientHeader";
type Props = {
  yo?: any;
};

const AppLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <ClientHeader></ClientHeader>
      {children}
    </>
  );
};

export default AppLayout;
