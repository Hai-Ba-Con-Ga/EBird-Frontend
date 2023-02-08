import { IconX } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { CommonModalMain, CommonModalWrapper } from "./modal.style";
import useModal from "./useModal";
const CommonModal: React.FC = () => {
  const { closeModal, ModalComponent, isModalClosable } = useModal();
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
    <CommonModalWrapper>
      <CommonModalMain>
        {!isModalClosable && (
          <button onClick={() => closeModal()}>
            <IconX color="var(--dark-blue)" />
          </button>
        )}
        <div>{ModalComponent}</div>
      </CommonModalMain>
    </CommonModalWrapper>
  );
};
export default CommonModal;
