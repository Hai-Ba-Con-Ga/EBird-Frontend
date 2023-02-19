import { atom } from "recoil";
import { getCurrentBird, getCurrentRoom } from "../../../utils/appCommon";
//TODO type bird
// TODO type Room
export interface AppState {
  currentBird: any;
  currentRoom: any;
}
const AppAtom = atom<AppState>({
  key: "appState",
  default: {
    currentBird: getCurrentBird(),
    currentRoom: null,
  },
});

export default AppAtom;
