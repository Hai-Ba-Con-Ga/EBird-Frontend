import { atom } from "recoil";

interface SidebarState {
    myRequests : any[];
    myGroup : any[];
}

const SidebarAtom = atom({
    key: "sidebar",
    default : {
        myRequests : []
    }
})
export default SidebarAtom;