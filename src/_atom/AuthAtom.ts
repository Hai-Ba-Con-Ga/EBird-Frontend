import { atom } from "recoil";

export interface User {
  // TODO : update user type base on BE
  id: number;
  username: string;
}
export interface AuthState {
  userInfomation?: User | null;
}
const authAtom = atom<AuthState>({
  key: "auth",
  default: {
    userInfomation: null,
  },
});

export default authAtom;
