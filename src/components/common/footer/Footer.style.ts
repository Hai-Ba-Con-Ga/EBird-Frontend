import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingFooterWrapper = styled.div`

  background:#faf2e6;
  padding:30px 0px;
  font-family: 'Play', sans-serif;
  text-align:center;
  scroll-snap-align: start;

`;

export const FooterRow = styled.div`
  width:100%;
  margin:1% 0%;
  padding:0.6% 0%;
  color:gray;
  font-size:2em;
  a {
    text-decoration:none;
    color:gray;
    transition:0.5s;
    font-size: 1.5em;
    i {
        font-size:2em;
        margin:0% 1%;
        }
    }
  a:hover {
    color:green;
  }
  ul {
    width:100%;
        li{
        display:inline-block;
        margin:0px 30px;
        }
    }

`




