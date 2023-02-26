import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthState, User } from "../auth/AuthAtom";
import { useNavigate } from "react-router-dom";
type Props = {
  isAuthenticated: boolean;
  children?: React.ReactNode;
};

const ProtectedRoute = ({ isAuthenticated,children }: Props) => {
  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"}></Navigate>;
  // }
  return <Outlet />;
};

export default ProtectedRoute;
