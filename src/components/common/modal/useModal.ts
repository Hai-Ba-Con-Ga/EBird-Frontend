import React, { Component, ReactNode, useCallback } from "react";
import { useRecoilState } from "recoil";
import modalState, { ModalState } from "./modal.atom";

function useModal() {
	const [modal, setModalState] = useRecoilState(modalState);
	const openModal = useCallback(
		({
			payload,
			component,
			closable = true,
		}: {
			payload: any;
			component: React.ReactElement;
			closable: boolean;
		}) => {
			setModalState({
				isShown: true,
				payload,
				component,
				type: "common",
				closable,
			});
		},
		[modal]
	);
	const closeModal = useCallback(() => {
		// if (modal.payload) delete modal["payload"];
		setModalState({ isShown: false, component: null, payload: null });
	}, [modal]);
	return {
		isModalShown: modal.isShown,
		openModal,
		closeModal,
		modalType: modal.type,
		ModalComponent: modal.component as any,
		isModalClosable: modal.closable,
	};
}

export default useModal;
