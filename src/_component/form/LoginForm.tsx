import React, { useEffect } from "react";
import { GradientGreenButton } from "../common/button/Button.style";
import { TextField, FieldError } from "../common/form/TextField";
import { TextFieldTheme } from "../common/theme/TextFieldTheme";
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
} from "../auth/login/Login.style";

const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  return (
    <LoginFormWrapper
      onSubmit={handleSubmit((value) => {
        console.log(value);
        //TODO : Login implement
      })}
    >
      <h1>Sign in to Birdiverse</h1>
      <TextField
        isValid={!errors.email}
        theme={TextFieldTheme.BLACK}
        defaultTheme={TextFieldTheme.BLACK}
      >
        <input type="text" {...register("email")} placeholder=" " />
        <label htmlFor="">Email</label>
        <FieldError isShown={!!errors.email}>
          {errors?.email?.message?.toString()}
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
