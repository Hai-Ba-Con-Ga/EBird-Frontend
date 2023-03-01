import React, { useCallback } from "react";
import useLoading from "../components/useLoading";


interface RequestParams {
  requestFunction: any;
}

const useQuery = () => {
  const { closeLoading, openLoading } = useLoading();
  const request = useCallback(async (requestFunction : any,params?:any,data?:any) => {
    openLoading();
    return await requestFunction(params,data).finally(() => closeLoading());
  }, []);
  return { request };
};

export default useQuery;
