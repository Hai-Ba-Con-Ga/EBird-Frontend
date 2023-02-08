import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import useLoading from "../components/useLoading";


const AxiosInterceptor: React.FC<PropsWithChildren<{ key?: string }>> = ({
  children,
}) => {
  const navigate = useNavigate();
  const LOCAlSTORAGE_TOKEN_KEY = "access_token";
  const {isLoading,closeLoading,openLoading} = useLoading();
  const setToken = (token: string) => {
    localStorage.setItem(LOCAlSTORAGE_TOKEN_KEY, JSON.stringify(token));
  };
  const getToken = () => {
    const token = localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : "";
    return token ? JSON.parse(token) : "";
  };
  useEffect(() => {
    const resInterceptor = (response: AxiosResponse) => {
      if (response.data?.data?.accessToken) {
        setToken(response.data.data);
      }
      if (isLoading) closeLoading();
      return response.data;
    };

    const errInterceptor = (error: AxiosError) => {
      if (isLoading) closeLoading();
      return Promise.resolve(error.response);
    };
    const reqInterceptor = axiosClient.interceptors.request.use(
      (config: any) => {
        // if(!isLoading) openLoading("FULL");
        config.headers = {...config.headers, Authorization: `Bearer ${getToken().accessToken}`}
        console.log("open")
        return config;
        
      },
      (err) => {
        console.log("open")
        // if(!isLoading) openLoading("FULL");
        return Promise.reject(err);
      }
    );
    const interceptor = axiosClient.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => {
      axiosClient.interceptors.response.eject(interceptor);
      axiosClient.interceptors.request.eject(reqInterceptor);
    };
  }, [navigate]);
  return <>{children}</>;
};

export default AxiosInterceptor;
