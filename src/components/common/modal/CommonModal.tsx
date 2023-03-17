import { IconX } from "@tabler/icons-react";
import React, { useEffect, useRef } from "react";
import useClickOutside from "../../app/common/useClickOutside";
import { CommonModalMain, CommonModalWrapper } from "./modal.style";
import useModal from "./useModal";
const CommonModal: React.FC = () => {
	const { closeModal, ModalComponent, isModalClosable } = useModal();
	const modalRef = useRef<any>();
	useClickOutside(modalRef, () => {
		closeModal();
	});
	useEffect(() => {
		if (isModalClosable) {
			window.addEventListener("keydown", (ev) => {
				if (ev.keyCode == 27) {
					closeModal();
				}
			});
		} else {
			window.removeEventListener("keypress", () => "");
		}
		return () => {
			window.removeEventListener("keypress", () => "");
		};
	}, []);

	return (
		<CommonModalWrapper
			initial={{
				transform: "scale(0.3)",
			}}
			animate={{
				transform: "scale(1)",
			}}
			exit={{ transform: "scale(0.3)" }}
		>
			<CommonModalMain ref={modalRef}>
				{isModalClosable && (
					<button id="close-modal-button" onClick={() => closeModal()}>
						<IconX color="var(--dark-blue)" />
					</button>
				)}
				{ModalComponent}
			</CommonModalMain>
		</CommonModalWrapper>
	);
};
export default CommonModal;
