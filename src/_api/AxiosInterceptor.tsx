import React, { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios"
import axiosClient from './axiosClient'
import useLoading from '../_hook/useLoading';

const AxiosInterceptor:React.FC<PropsWithChildren<{key?: string}>> = ({children}) => {
    const navigate = useNavigate();
    const {closeLoading,isLoading} = useLoading();
    const LOCAlSTORAGE_TOKEN_KEY = "access_token";
    const getToken = () => {
        const token = localStorage.getItem(LOCAlSTORAGE_TOKEN_KEY) ? localStorage.getItem(LOCAlSTORAGE_TOKEN_KEY) : "" ;
        return token ? JSON.parse(token) : "" ;
      };
   const setToken = (token: string) => {
        localStorage.setItem(LOCAlSTORAGE_TOKEN_KEY, token);
      };
    useEffect(() => {
        const resInterceptor = (response:AxiosResponse) => {
            if(response.data?.accessToken){
                setToken(response.data);
            }
            if(isLoading) closeLoading();
            return response;
        }

        const errInterceptor = (error:AxiosError) => {

            if (error.response?.status === 401) {
                navigate('/login');
            }

            return Promise.reject(error);
        }
        const reqInterceptor = axiosClient.interceptors.request.use((value:AxiosRequestConfig)=>{
            if(getToken().accessToken){
                value.headers = {
                    Authorization : 'Bearer ' + getToken().accessToken
                }
            }
            return value;
        })
        const interceptor = axiosClient.interceptors.response.use(resInterceptor, errInterceptor);
       
        return () =>{
             axiosClient.interceptors.response.eject(interceptor)      
             axiosClient.interceptors.request.eject(reqInterceptor)      
            };

    }, [navigate])
  return (
    <>
    {children}
    </>
  )
}

export default AxiosInterceptor