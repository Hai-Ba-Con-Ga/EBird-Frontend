import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import authAtom, { AuthState, User } from "../_atom/AuthAtom";
import AuthApi, { LoginParams } from "../_api/auth/auth.api";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const nav = useNavigate();
  const getMe = async () => {
    return await AuthApi.getMe();
  };

  useEffect(() => {
    getMe()
      .then((response) =>
        setAuth({ userInfomation: response.data, firstLoading: false })
      )
      .catch((err) => {
        setAuth({ userInfomation: null, firstLoading: false });
      });
  }, []);
  useEffect(() => {
    console.log("useAuth", auth);
  }, [auth]);
  const registerNewAccount = useCallback(() => {
    console.log("");
  }, []);
  const login = useCallback(async (params: LoginParams) => {
    const data = await AuthApi.login(params);
    if (data.success) {
      console.log(data);
      nav("/app");
    }
  }, []);
  return {
    auth: auth as AuthState,
    getMe: getMe,
    login,
  };
};
export default useAuth;
