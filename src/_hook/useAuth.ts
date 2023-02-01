import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import authAtom, { AuthState, User } from "../_atom/AuthAtom";
import AuthApi, { LoginParams } from "../_api/auth/auth.api";

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const getMe = async () => {
    return await AuthApi.getMe();
  };
  useEffect(() => {
    getMe().then((user) => setAuth({ userInfomation: user }));
  }, []);
  // const registerNewAccount = useCallback(
   
  // )
  const login = useCallback(async(params : LoginParams)=>{
      const data =  await AuthApi.login(params);
      if(data.success) {
        console.log(data)
      }
  },[])
  return {
    user: auth as AuthState,
    getMe: getMe(),
    login 
  };
};
export default useAuth;
