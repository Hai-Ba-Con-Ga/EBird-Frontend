import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthState, User } from "../auth/AuthAtom";
import { useNavigate } from "react-router-dom";
type Props = {
  user?: User | null;
};

const ProtectedRoute = ({ user }: Props) => {
  const nav = useNavigate();
  useEffect(() => {
    console.log(user);
   
  }, [user]);
  if (!user) {
   return <Navigate to={"/login"}></Navigate>
  }
  return <Outlet />;
};

export default ProtectedRoute;
