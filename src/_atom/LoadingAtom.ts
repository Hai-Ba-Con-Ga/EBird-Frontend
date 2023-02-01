import { atom } from "recoil";  

export interface CommonState {
    
        isShown : boolean,
        type? : LoadingType,
        loadingJobs? : string[],
    
}
export type LoadingType = "FULL" | "LOCAL";
 const loadingAtom = atom<CommonState>({
    key: "common",
    default : {

            isShown:false,
            type: "FULL",
            loadingJobs: []
    },
})

export default loadingAtom;