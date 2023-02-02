import React, { useCallback } from "react";
import useLoading from "../_hook/useLoading";

interface RequestParams {
  requestFunction: any;
}

const useQuery = () => {
  const { closeLoading, openLoading } = useLoading();
  const request = useCallback(async ({ requestFunction }: RequestParams) => {
    openLoading();
    return await requestFunction().finally(() => closeLoading());
  }, []);
  return { request };
};

export default useQuery;
