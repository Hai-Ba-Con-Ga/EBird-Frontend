import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import commonAtom, { LoadingType } from '../_atom/LoadingAtom'

const useLoading = () => {
    const [loading,setLoading] = useRecoilState(commonAtom);
    const closeLoading = useCallback(()=>{
        setLoading({...loading , isShown : false});
    },[loading]);
    const openLoading = useCallback((loadingType :LoadingType = "FULL",jobName?:string)=>{
        loading.isShown = true;
        loading.type = loadingType;
        jobName ? loading.loadingJobs?.push(jobName) : undefined;

        setLoading({...loading});

    },[loading]);
    return ({
    closeLoading,
    openLoading,
    isLoading : loading.isShown
}
  )
}

export default useLoading;