import React from "react";
import { OutlineWhiteButton } from "../button/Button.style";
import {
  HeaderButtons,
  HeaderLogo,
  LandingHeaderNavBar,
  LandingHeaderWrapper,
} from "./Header.style";

const LandingHeader = () => {
  return (
    <LandingHeaderWrapper>
      <LandingHeaderNavBar>
        <HeaderLogo>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3418/3418582.png"
            alt="logo"
          />
        </HeaderLogo>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Ranking</a>
        </li>
        <li>
          <a href="#!">Rules</a>
        </li>
      </LandingHeaderNavBar>
      <HeaderButtons>
        <OutlineWhiteButton>Login</OutlineWhiteButton>
        <OutlineWhiteButton>Signup</OutlineWhiteButton>
      </HeaderButtons>
    </LandingHeaderWrapper>
  );
};

export default LandingHeader;
