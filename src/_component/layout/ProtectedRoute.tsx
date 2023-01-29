import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthState, User } from "../../_atom/AuthAtom";

type Props = {
  user?: AuthState | null;
};

const ProtectedRoute = ({ user }: Props) => {
  useEffect(() => {
    console.log(user);
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
