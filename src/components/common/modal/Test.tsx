

import { IconX } from "@tabler/icons-react";
import React from "react";
import { CommonModalMain, CommonModalWrapper } from "./modal.style"
import useModal from "./useModal";
const Test : React.FC = () => {
    const {closeModal} = useModal();
    return <h1>Hello modal is working</h1>
}
export default Test;