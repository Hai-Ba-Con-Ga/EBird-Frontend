import { yupResolver } from "@hookform/resolvers/yup";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandTwitter,
} from "@tabler/icons-react";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  AuthFormOrDivider,
  AuthFormSubmitButton,
  ForgotLink,
  LoginFormWrapper,
  OauthButtons,
  OauthLink,
} from "./Login.style";
import { FieldError, TextField } from "../common/form/TextField";
import { TextFieldTheme } from "../common/theme/TextFieldTheme";
const forgotSchema = yup.object({
  email: yup.string().email().required(),
});
const ForgotForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(forgotSchema),
  });

  return (
    <LoginFormWrapper
      onSubmit={handleSubmit((value) => {
        console.log(value);
        //TODO : forgot password implement
      })}
    >
      <h1>Forgot password</h1>
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

      <AuthFormSubmitButton type="submit">Reset</AuthFormSubmitButton>
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

export default ForgotForm;
