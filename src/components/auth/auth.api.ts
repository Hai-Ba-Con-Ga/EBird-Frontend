import axiosClient from "../../api/axiosClient";
export interface RegisterParams {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastName: string;
  desciption: string;
}
export interface LoginParams {
  username: string;
  password: string;
}
const AuthApi = {
  getMe: async () => {
    const url = "/auth/me";
    const response = await axiosClient.get(url);
    // return response.data;
    // TODO: until BFCS-38 complete
    return response.data;
  },
  register: async (params: RegisterParams) => {
    const url = "/auth/signup";
    const response = await axiosClient.post(
      url,
      { ...params, desciption: "init" },
      {}
    );
    return response.data;
  },
  login: async (params: LoginParams) => {
    const url = "/auth/login";
    const response = await axiosClient.post(url, { ...params });
    return response.data;
  },
};
export default AuthApi;
