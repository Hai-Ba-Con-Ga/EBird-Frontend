import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import authAtom, { AuthState, User } from "../_atom/AuthAtom";
import AuthApi, { LoginParams, RegisterParams } from "../_api/auth/auth.api";
import { useNavigate } from "react-router-dom";
import useLoading from "./useLoading";
import useQuery from "../_api/useQuery";
import { toast } from "react-toastify";
const useAuth = (init?: boolean) => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const nav = useNavigate();
  const {request} = useQuery()
  const {closeLoading,openLoading} = useLoading();
  const getMe = useCallback(async () => {
    return await request(AuthApi.getMe)
  },[]);

  useEffect(() => {
    if(init){
      getMe()
      .then((response) =>
      setAuth({ userInfomation: response.data, firstLoading: false })
      )
      .catch((err) => {
        setAuth({ userInfomation: null, firstLoading: false });
      })
    }
  }, []);

  const registerNewAccount = useCallback(async (params:RegisterParams) => {
    const data = await request(AuthApi.register,params);
    if(data.success){
      window.location.replace("/app") 
    }else {
      toast.error( data.message || "Cannot register new account! Try again later")
    }
    
  }, []);
  const login = useCallback(async (params: LoginParams) => {
    const data = await request(AuthApi.login,params);
    if (data.success) {
      getMe()
      .then((response) =>{

        setAuth({ userInfomation: response.data, firstLoading: false })
        console.log("setauth successful",auth);
        
      }
      )
      .catch((err) => {
        setAuth({ userInfomation: null, firstLoading: false });
      }).finally(()=>{
        nav("/app");
      })
    }else {
      return data;
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
