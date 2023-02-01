import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthState, User } from "../../_atom/AuthAtom";
import { useNavigate } from "react-router-dom";
type Props = {
  user?: User | null;
};

const ProtectedRoute = ({ user }: Props) => {
  const nav = useNavigate();
  useEffect(() => {
    console.log(user);
    if (!user) {
      nav("/login");
    }
  }, [user]);

  return <Outlet />;
};

export default ProtectedRoute;
