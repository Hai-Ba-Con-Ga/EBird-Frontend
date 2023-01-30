import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import authAtom, { AuthState, User } from "../_atom/AuthAtom";
import AuthApi from "../_api/auth/auth.api";

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const getMe = async () => {
    return await AuthApi.getMe();
  };
  useEffect(() => {
    getMe().then((user) => setAuth({ userInfomation: user }));
  }, []);

  return {
    user: auth as AuthState,
    getMe: getMe(),
  };
};
export default useAuth;
