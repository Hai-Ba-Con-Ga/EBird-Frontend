import {atom} from "recoil";

export interface CommonState {
	currentBird : any,
	currentRoom :  any
}

const commonAtom = atom({
	key : "common",
	default : {
		currentBird : null,
		currentRoom : null
	}
})
export default commonAtom;
