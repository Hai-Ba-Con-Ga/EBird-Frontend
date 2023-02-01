import { yupResolver } from "@hookform/resolvers/yup";
import {
  IconBrandGoogle,
  IconBrandTwitter,
  IconBrandFacebook,
} from "@tabler/icons-react";
import React from "react";
import { useForm } from "react-hook-form";
import {
  AuthFormOrDivider,
  AuthFormSubmitButton,
  ForgotLink,
  LoginFormWrapper,
  OauthButtons,
  OauthLink,
} from "../auth/login/Login.style";
import {
  TextField,
  MultipleTextField,
  FieldError,
} from "../common/form/TextField";
import { TextFieldTheme } from "../common/theme/TextFieldTheme";
import * as yup from "yup";
import useAuth from "../../_hook/useAuth";
import { RegisterParams } from "../../_api/auth/auth.api";
const registerSchema = yup.object({
  name: yup.string().required(),
  username: yup.string().required().min(6).max(25),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  repassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const RegisterForm = () => {
  const {registerNewAccount} = useAuth()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });
  return (
    <LoginFormWrapper
    initial={{opacity : 0,transform : "scale(0.5)"}} 
    animate = {{opacity:1 ,transform: "scale(1)"}}
      onSubmit={handleSubmit((value) => {
        console.log(value);
        registerNewAccount(value as RegisterParams)
        // TODO : Register implement
      })}
    >
      <h1>Sign up to join Birdiverse</h1>
      <MultipleTextField>
        <TextField
          isValid={!errors.name}
          theme={TextFieldTheme.BLACK}
          defaultTheme={TextFieldTheme.BLACK}
        >
          <input type="text" {...register("name")} placeholder=" " />
          <label htmlFor="">Name</label>
          <FieldError isShown={!!errors.name}>
            {errors?.name?.message?.toString()}
          </FieldError>
        </TextField>
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
      </MultipleTextField>
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
      <TextField
        isValid={!errors.repassword}
        theme={TextFieldTheme.BLACK}
        defaultTheme={TextFieldTheme.BLACK}
      >
        <input type="password" {...register("repassword")} placeholder=" " />
        <label htmlFor="">Confirm password</label>
        <FieldError isShown={!!errors.repassword}>
          {errors?.repassword?.message?.toString()}
        </FieldError>
      </TextField>
      <ForgotLink to={"/forgot"}>Forgot password ?</ForgotLink>
      <AuthFormSubmitButton type="submit">Sign Up</AuthFormSubmitButton>
      <AuthFormOrDivider />
      <h2 style={{ textAlign: "center" }}>
        Already have an account ? <ForgotLink to={"/login"}>Sign in</ForgotLink>
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

export default RegisterForm;
