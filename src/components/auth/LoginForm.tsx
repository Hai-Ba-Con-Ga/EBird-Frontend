import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
	IconBrandFacebook,
	IconBrandGoogle,
	IconBrandTwitter,
} from "@tabler/icons-react";
import {
	AuthFormOrDivider,
	AuthFormSubmitButton,
	ForgotLink,
	LoginFormWrapper,
	OauthButtons,
	OauthLink,
} from "./Login.style";
import useAuth from "./useAuth";

import AuthApi, { LoginParams } from "./auth.api";
import { toast } from "react-toastify";
import { FieldError, TextField } from "../common/form/TextField";
import { TextFieldTheme } from "../common/theme/TextFieldTheme";
const CLIENT_ID =
	"510469289426-ka5eitvaosv0mfjrj24ajfkvovjneli1.apps.googleusercontent.com";
const REDIRECT_URI = "https://localhost:3000/login";
const SCOPE = "profile email";

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=code`;

const loginSchema = yup
	.object({
		username: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onSubmit",
		resolver: yupResolver(loginSchema),
	});
	const { login, loginWithGoogle } = useAuth();
	const queryParams = new URLSearchParams(window.location.search);
	const authCode = queryParams.get("code");
	useEffect(() => {
		if (authCode) {
			AuthApi.getGoogleToken(authCode).then((response) => {
				console.log("GOOGLE TOKEN", response);
				if (response.access_token) {
					// console.log(response.access_token);
					// AuthApi.getProfile(response.access_token).then((res) =>
					// 	console.log(res)
					// );
					loginWithGoogle(response.id_token);
				}
			});
		}
	}, [authCode]);
	// const googleAuthHandler = useCallback(async () => {
	// 	// create a new OAuth 2.0 client with the specified credentials
	// 	const auth = new GoogleAuth({
	// 		clientId: CLIENT_ID,
	// 		clientSecret: CLIENT_SECRET,
	// 		redirectUri: REDIRECT_URI,
	// 	});

	// 	// create a new user refresh token client with the specified refresh token
	// 	const refreshClient = new UserRefreshClient({
	// 		clientId: CLIENT_ID,
	// 		clientSecret: CLIENT_SECRET,
	// 		refreshToken: REFRESH_TOKEN,
	// 	});

	// 	// obtain a new access token using the refresh token client
	// 	const accessToken = await refreshClient.getAccessToken();

	// 	// obtain a new credential using the access token
	// 	const credential = auth.fromTokenResponse({
	// 		access_token: accessToken,
	// 		refresh_token: REFRESH_TOKEN,
	// 	});

	// 	console.log(`Credential: ${JSON.stringify(credential.toJSON())}`);
	// }, []);
	return (
		<LoginFormWrapper
			initial={{ opacity: 0, transform: "scale(0.5)" }}
			animate={{ opacity: 1, transform: "scale(1)" }}
			onSubmit={handleSubmit(async (value) => {
				const data = await login(value as LoginParams);
			})}
		>
			<h1>Sign in to Birdiverse</h1>
			<TextField
				isValid={!errors.username}
				theme={TextFieldTheme.BLACK}
				defaultTheme={TextFieldTheme.BLACK}
			>
				<input type="text" {...register("username")} placeholder=" " />
				<label htmlFor="">Username</label>
				<FieldError isShown={!!errors.username}>
					{errors?.username?.message?.toString()}
				</FieldError>
			</TextField>
			<TextField
				isValid={!errors.password}
				theme={TextFieldTheme.BLACK}
				defaultTheme={TextFieldTheme.BLACK}
			>
				<input type="password" {...register("password")} placeholder=" " />
				<label htmlFor="">Password</label>
				<FieldError isShown={!!errors.password}>
					{errors?.password?.message?.toString()}
				</FieldError>
			</TextField>
			<ForgotLink to={"/forgot"}>Forgot password ?</ForgotLink>
			<AuthFormSubmitButton type="submit">Login</AuthFormSubmitButton>
			<AuthFormOrDivider />
			<h2 style={{ textAlign: "center" }}>
				Dont have account ? <ForgotLink to={"/signup"}>Signup</ForgotLink>
			</h2>
			<OauthButtons>
				<OauthLink href="#">
					<IconBrandFacebook />
				</OauthLink>
				<OauthLink
					href="#"
					onClick={() => {
						window.location.replace(authUrl);
					}}
				>
					<IconBrandGoogle />
				</OauthLink>
				<OauthLink href="#">
					<IconBrandTwitter />
				</OauthLink>
			</OauthButtons>
		</LoginFormWrapper>
	);
};

export default LoginForm;
