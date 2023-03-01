import { atom } from "recoil";
import { getCurrentBird, getCurrentRoom } from "../../../utils/appCommon";
import { Bird, Room } from "../../../utils/types";
//TODO type bird
// TODO type Room
export interface AppState {
  currentBird: Bird | undefined;
  currentRoom: Room | undefined;
}
const AppAtom = atom<AppState>({
  key: "appState",
  default: {
    currentBird: getCurrentBird(),
    currentRoom: getCurrentRoom(),
  },
});

export default AppAtom;
