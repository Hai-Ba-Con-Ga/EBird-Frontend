import React, { Component, useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import commonAtom, { LoadingType } from './LoadingAtom'
import FullLoading from './common/loading/FullLoading';

const useLoading = () => {
    const [loading,setLoading] = useRecoilState(commonAtom);
    const closeLoading = useCallback(()=>{
        setLoading({...loading , isShown : false});
    },[loading]);
    const [loader,setLoader] = useState<JSX.Element>(FullLoading);
    useEffect(()=>{
        switch (loading.type){
            case "FULL" : 
            setLoader(FullLoading)
            break;
            case "LOCAL" : setLoader(FullLoading)
            break;
        }
    },[loading.type])
    const openLoading = useCallback((loadingType :LoadingType = "FULL",jobName?:string)=>{
        //TODO: jobname implementation if necessary
        setLoading({...loading,isShown : true,type:loadingType});
    },[loading]);
    
    return ({
    closeLoading,
    openLoading,
    isLoading : loading.isShown,
    loadingType : loading.type,
    Loader : loader,
    }
    )
}

export default useLoading;