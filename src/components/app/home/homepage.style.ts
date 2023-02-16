import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomepageWrapper = styled.div`
    width: 100%;
    height: 100%; 
    padding: var(--page-padding);
    /* max-width: 155rem; */
    /* background-color: red; */
`
export const HomepageMainContent = styled.div`
    display: flex;
    gap : 2rem;
    height: 100%;
    
`
export const BannerSwiper = styled.div`
    flex: 1 1 60%;
    border-radius: var(--roundedMedium);
    background-color: red;
    height: 100%;
`
export const LeaderboardTable = styled.table `
    width : 100%;
    font-size: var(--text-3xl);
    & tr th {
        font-size: var(--text-5xl);
    }
    & tr td:first-child{
        padding-top: 1rem        
    }
    & tr th ,&  tr td {
        /* display: inline-block; */
        /* min-width: 12rem; */
        padding: 1rem  2rem 2rem 2rem;
        text-align : center;
        
    }
`
export const SeeMoreRankLink  = styled(NavLink)`
    color : var(--dark-green);
    font-weight: 600;
    width: 100%;
    margin : 0 auto;
    text-align:center;
    font-size: var(--text-5xl);
    display: block;
`