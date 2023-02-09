import React from "react";
import {
  BannerSwiper,
  HomepageMainContent,
  HomepageWrapper,
} from "../components/app/home/homepage.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from "styled-components";
const CustomSwiper = styled(Swiper)`
  /* background-color: red; */
  height: 100%;
  flex: 1 1 60%;
  border-radius: var(--roundedSmall);
`
const RankingBoard = styled.div`
  flex : 0 0 40%;
  height: 100%;
  border: 3px solid var(--dark-green);
  border-radius: var(--roundedSmall);
  h1 {
    text-transform: uppercase;
    color : var(--dark-green);
    margin : 4rem auto;
    text-align: center;
    font-size: var(--text-7xl);
  }
`
const CustomeSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Homepage = () => {
  return (
    <HomepageWrapper>
      <HomepageMainContent>
          <CustomSwiper
          spaceBetween={50}
          slidesPerView={1}
          // autoHeight={true}
          modules={[ Pagination]}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
            <CustomeSlide><img src="https://source.unsplash.com/random" alt="" /></CustomeSlide>
            <CustomeSlide><img src="https://source.unsplash.com/random" alt="" /></CustomeSlide>
            <CustomeSlide><img src="https://source.unsplash.com/random" alt="" /></CustomeSlide>
            <CustomeSlide><img src="https://source.unsplash.com/random" alt="" /></CustomeSlide>
          </CustomSwiper>
          <RankingBoard>
            <h1>leaderboard</h1>
          </RankingBoard>
      </HomepageMainContent>
    </HomepageWrapper>
  );
};

export default Homepage;
