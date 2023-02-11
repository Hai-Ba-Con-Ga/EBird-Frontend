import { Component, ReactNode } from "react";
import { atom } from "recoil";
export interface ModalState {
  isShown: boolean;
  payload?: any;
  component?: React.ReactElement | null;
  type?: "common";
  closable?: boolean;
}

const modalState = atom<ModalState>({
  key: "commonModal",
  default: {
    isShown: false,
    payload: null,
    type: "common",
    closable: true,
  },
});
export default modalState;
