import React, { FC, PropsWithChildren } from "react";
import {
  AuthBlock,
  AuthPageWrapper,
} from "../../_component/auth/AuthPage.style";
import ImageComponent from "../../_component/common/image/ImageComponent";

const AuthPage: FC<
  PropsWithChildren<{
    a: any;
  }>
> = ({ children }) => {
  return (
    <AuthPageWrapper>
      <ImageComponent src="https://source.unsplash.com/random"></ImageComponent>
      <AuthBlock>{children}</AuthBlock>
    </AuthPageWrapper>
  );
};

export default AuthPage;
