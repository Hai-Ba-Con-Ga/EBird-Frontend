import React, { useEffect, useState } from "react";
import { OutlineWhiteButton } from "../button/Button.style";
import {
  HeaderButtons,
  HeaderLogo,
  LandingHeaderNavBar,
  LandingHeaderWrapper,
} from "./Header.style";
import { NavLink, useNavigate } from "react-router-dom";

const LandingHeader = () => {
  const nav = useNavigate();

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
        <OutlineWhiteButton onClick={() => nav("/login")}>
          {/* <NavLink to={"/login"}>Login</NavLink> */}
          Login
        </OutlineWhiteButton>
        <OutlineWhiteButton onClick={() => nav("/signup")}>
          {/* <NavLink to={"/signup"}>Signup</NavLink> */}
          Signup
        </OutlineWhiteButton>
      </HeaderButtons>
    </LandingHeaderWrapper>
  );
};

export default LandingHeader;
