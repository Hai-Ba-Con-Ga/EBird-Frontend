import React from "react";
import {
  FooterRow,
  LandingFooterWrapper,
} from "./Footer.style";

const LandingHeader = () => {

  return (
    <LandingFooterWrapper>
        <FooterRow>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
        </FooterRow>
        <FooterRow>
        GLOBIRD Copyright © 2023 - All rights reserved
        </FooterRow>
      
    </LandingFooterWrapper>

    
  );
};

export default LandingHeader;
