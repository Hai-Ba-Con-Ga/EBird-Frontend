import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import useLoading from "../_hook/useLoading";

const AxiosInterceptor: React.FC<PropsWithChildren<{ key?: string }>> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { closeLoading, isLoading } = useLoading();
  const LOCAlSTORAGE_TOKEN_KEY = "access_token";

  const setToken = (token: string) => {
    localStorage.setItem(LOCAlSTORAGE_TOKEN_KEY, JSON.stringify(token));
  };
  useEffect(() => {
    const resInterceptor = (response: AxiosResponse) => {
      console.log("in interceptor", response);
      if (response.data?.data?.accessToken) {
        setToken(response.data.data);
      }
      if (isLoading) closeLoading();
      return response;
    };

    const errInterceptor = (error: AxiosError) => {
      if (error.response?.status === 401) {
        navigate("/login");
      }

      return Promise.reject(error);
    };
    const reqInterceptor = axiosClient.interceptors.request.use(
      (config: any) => {
        return config;
      },
      (err) => {
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
