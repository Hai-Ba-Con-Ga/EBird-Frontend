import axios from "axios";
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

const CLIENT_ID =
	"510469289426-ka5eitvaosv0mfjrj24ajfkvovjneli1.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://localhost:3000/login";

// send a POST request to the Google OAuth API's token endpoint to obtain an access token
const data = {
	client_id: CLIENT_ID,
	client_secret: CLIENT_SECRET,
	redirect_uri: REDIRECT_URI,
	grant_type: "authorization_code",
	// grant_type: "client_credentials",
	code: "",
	scope: "email",
};
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
	logout: async () => {
		const url = "/auth/logout";
		const response = await axiosClient.delete(url);
		return response.data;
	},
	loginWithGoogle: async (token: string) => {
		const url = "/auth/login-with-google";
		const response = await axiosClient.get(url, {
			params: {
				idToken: token,
			},
		});
		return response.data;
	},
	getGoogleToken: async (authCode: string) => {
		data.code = authCode;
		return axios
			.post("https://oauth2.googleapis.com/token", data)
			.then((response) => {
				const accessToken = response.data;
				console.log(`Access token: ${accessToken}`);
				return accessToken;
			})
			.catch((error) => {
				return null;
			});
	},
	getProfile: async (accessToken: string, idToken?: string) => {
		const url =
			"https://www.googleapis.com/oauth2/v3/userinfo?access_token=" +
			accessToken;
		const params = {
			client_id: CLIENT_ID,
			redirect_uri: REDIRECT_URI,
			response_type: "token",
			scope: "https://www.googleapis.com/auth/userinfo.email",
		};
		return axios
			.get(url, {
				params,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then((res) => res.data);
	},
};
export default AuthApi;
