import React, { Component, ReactNode, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import modalState, { ModalState } from './modal.atom'



function useModal() {
    const [modal,setModalState] = useRecoilState(modalState)
    const openModal = useCallback(({payload,component} : {payload : any , component : ReactNode})=>{ 
        setModalState({isShown : true, payload,component})
    },[modal]);
    const closeModal = useCallback(()=>{ 
        if(modal.component)
        delete modal.component;
        if(modal.payload)
        delete modal.payload;
        setModalState({isShown : false, component: null,payload:null})
    },[modal]);
    return (
        {
            isModalShown : modal.isShown,
            openModal,
            closeModal,
            modalType : modal.type,
            ModalComponent: modal.component
        }
  )
}

export default useModal