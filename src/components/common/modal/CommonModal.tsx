import { IconX } from "@tabler/icons-react";
import React from "react";
import { CommonModalMain, CommonModalWrapper } from "./modal.style"
import useModal from "./useModal";
const CommonModal : React.FC = () => {
    const {closeModal,ModalComponent} = useModal();
    return <CommonModalWrapper>
        <CommonModalMain> 
            <button onClick={()=>closeModal()}>
                <IconX color="var(--dark-blue)"/>
            </button>
            <div>
            {ModalComponent}
            </div>
        </CommonModalMain>
    </CommonModalWrapper>
}
export default CommonModal