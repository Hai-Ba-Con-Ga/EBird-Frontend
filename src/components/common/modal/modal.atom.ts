import { Component, ReactNode } from "react";
import { atom } from "recoil";
export interface ModalState {
    isShown : boolean;
    payload? : any;
    component?: ReactNode |null
    type? : "common";
}

const modalState = atom<ModalState>({
    key:  "commonModal",
    default : {
        isShown : true,
        payload : null,
        type : "common"
    }
})
export default modalState;