import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import authAtom, { AuthState, User } from "./AuthAtom";
import AuthApi, { LoginParams, RegisterParams } from "./auth.api";
import { useNavigate } from "react-router-dom";
import useLoading from "../useLoading";
import useQuery from "../../api/useQuery";
import { toast } from "react-toastify";
const useAuth = (init?: boolean) => {
	const [auth, setAuth] = useRecoilState(authAtom);
	const nav = useNavigate();
	const { request } = useQuery();
	const { closeLoading, openLoading } = useLoading();
	const getMe = useCallback(async () => {
		return await request(AuthApi.getMe);
	}, []);

	useEffect(() => {
		if (init) {
			getMe()
				.then((response) =>
					setAuth({
						userInfomation: response.data,
						firstLoading: false,
						isAuthenticated: true,
					})
				)
				.catch((err) => {
					setAuth({
						userInfomation: null,
						firstLoading: false,
						isAuthenticated: false,
					});
				});
		}
	}, []);

	const registerNewAccount = useCallback(async (params: RegisterParams) => {
		const data = await request(AuthApi.register, params);
		if (data.success) {
			// window.location.replace("/log")
			nav("/login");
		} else {
			toast.error(
				data.message || "Cannot register new account! Try again later"
			);
		}
	}, []);
	const login = useCallback(async (params: LoginParams) => {
		const data = await request(AuthApi.login, params);
		await getMe()
			.then((response) => {
				console.log(response);

				setAuth({
					userInfomation: response.data,
					firstLoading: false,
					isAuthenticated: true,
				});
				console.log("setauth successful", auth);
				window.location.replace("/app");
			})
			.catch((err) => {
				setAuth({
					userInfomation: null,
					firstLoading: false,
					isAuthenticated: false,
				});
			})
			.finally(() => {
				nav("/app");
			});
	}, []);

	const logout = useCallback(async () => {
		const data = await request(AuthApi.logout);
		if (data.success) {
			window.location.replace("/login");
			localStorage.removeItem("access_token");
		} else {
			toast.error(data.message || "Cannot Logout");
		}
	}, []);
	return {
		auth: auth as AuthState,
		getMe: getMe,
		login,
		logout,
		registerNewAccount,
	};
};
export default useAuth;
