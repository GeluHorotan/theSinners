import React from 'react';
import styled from 'styled-components';

/// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
  Keyboard,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';

const Slider = ({ slidesPerView, sliderClass, items }) => {
  const params = {
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y,
      Autoplay,
      Mousewheel,
      Keyboard,
    ],
    slidesPerView: 3,
    spaceBetween: -30,
    centeredSlides: true,
    loop: true,
    height: 2000,
    simulateTouch: true,
    grabCursor: true,
    speed: 500,
    mousewheel: {
      invert: false,
      releaseOnEdges: true,
      sensitivity: 1,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  return (
    <MainContainer>
      <Swiper {...params}>
        <div className='swiper-wrapper'>
          {' '}
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {' '}
                <div className='swiper-slide'>{item}</div>{' '}
              </SwiperSlide>
            );
          })}
        </div>
        <div class='swiper-pagination'></div>

        <div class='swiper-button-prev'></div>
        <div class='swiper-button-next'></div>

        <div class='swiper-progress-bar'>
          <div class='progress'></div>
          <div class='progress-sections'></div>
        </div>
      </Swiper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  .swiper-button-prev {
    transition: 0.4s all ease-in-out;
  }
  .swiper-button-prev:hover {
    transform: scale(1.2);
  }
  .swiper-button-next {
    transition: 0.4s all ease-in-out;
  }
  .swiper-button-next:hover {
    transform: scale(1.2);
  }
`;

export default Slider;
