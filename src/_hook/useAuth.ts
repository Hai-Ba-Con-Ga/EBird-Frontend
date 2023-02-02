import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import authAtom, { AuthState, User } from "../_atom/AuthAtom";
import AuthApi, { LoginParams, RegisterParams } from "../_api/auth/auth.api";
import { useNavigate } from "react-router-dom";
import useLoading from "./useLoading";
const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const nav = useNavigate();
  const {closeLoading,openLoading} = useLoading();
  const getMe = async () => {
    return await AuthApi.getMe();
  };

  useEffect(() => {
    openLoading()
    getMe()
      .then((response) =>
        setAuth({ userInfomation: response.data, firstLoading: false })
      )
      .catch((err) => {
        setAuth({ userInfomation: null, firstLoading: false });
      }).finally(()=>{
        closeLoading();
      });
  }, []);

  const registerNewAccount = useCallback(async (params:RegisterParams) => {
    openLoading();
    const data = await AuthApi.register(params).finally(()=>closeLoading())

    if(data.success){
      nav("/login");
    }
    
  }, []);
  const login = useCallback(async (params: LoginParams) => {
    openLoading()
    const data = await AuthApi.login(params).then(res => {
    
      return res
    }).finally(()=>{
      closeLoading();
    });
    if (data.success) {
      nav("/app");
    }
  }, []);
  return {
    auth: auth as AuthState,
    getMe: getMe,
    login,
    registerNewAccount
  };
};
export default useAuth;
