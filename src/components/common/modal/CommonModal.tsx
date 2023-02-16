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
    <CommonModalWrapper initial={{
      transform: "scale(0.3)"
    }}
    animate={{
      transform: "scale(1)"
    }}
    exit={{transform:  "scale(0.3)"}}
    >
      <CommonModalMain>
        {!isModalClosable && (
          <button onClick={() => closeModal()}>
            <IconX color="var(--dark-blue)" />
          </button>
        )}
        {ModalComponent}
      </CommonModalMain>
    </CommonModalWrapper>
  );
};
export default CommonModal;
