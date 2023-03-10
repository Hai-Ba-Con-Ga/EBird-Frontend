import React, { useEffect } from "react";
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
import { LoginParams } from "./auth.api";
import { toast } from "react-toastify";
import { FieldError, TextField } from "../common/form/TextField";
import { TextFieldTheme } from "../common/theme/TextFieldTheme";

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
    reset
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });
  const {login} = useAuth();
  return (
    <LoginFormWrapper 
    initial={{opacity : 0,transform : "scale(0.5)"}} 
    animate = {{opacity:1 ,transform: "scale(1)"}}
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
        <OauthLink href="#">
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
