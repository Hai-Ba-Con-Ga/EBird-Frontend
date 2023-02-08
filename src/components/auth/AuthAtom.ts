import { atom } from "recoil";

export interface User {
  // TODO : update user type base on BE
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: number | boolean;
  description: string;
}
export interface AuthState {
  userInfomation?: User | null;
  firstLoading?: boolean;
  isAuthenticated: boolean;
}
const authAtom = atom<AuthState>({
  key: "auth",
  default: {
    userInfomation: null,
    firstLoading: true,
    isAuthenticated: true,
  },
});

export default authAtom;
