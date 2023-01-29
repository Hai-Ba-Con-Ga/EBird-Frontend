import React from "react";
import { OutlineWhiteButton } from "../button/Button.style";
import {
  HeaderButtons,
  HeaderLogo,
  LandingHeaderNavBar,
  LandingHeaderWrapper,
} from "./Header.style";
import { NavLink } from "react-router-dom";

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
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#ranking">Ranking</a>
        </li>
        <li>
          <a href="#rules">Rules</a>
        </li>
      </LandingHeaderNavBar>
      <HeaderButtons>
        <OutlineWhiteButton>
          <NavLink to={"/login"}>Login</NavLink>
        </OutlineWhiteButton>
        <OutlineWhiteButton>
          <NavLink to={"/signup"}>Signup</NavLink>
        </OutlineWhiteButton>
      </HeaderButtons>
    </LandingHeaderWrapper>
  );
};

export default LandingHeader;
