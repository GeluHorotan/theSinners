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

const Slider = ({
  slidesPerView,
  sliderClass,
  spaceBetween,
  loop,
  simulateTouch,
  grabCursor,
  speed,
  mousewheelInvert,
  mousewheelReleaseOnEdges,
  mousewheelSensitivity,
  keyboardEnabled,
  keyboardOnlyInViewport,
  paginationEl,
  paginationType,
  navigationNextEl,
  navigationPrevEl,
  autoplayDelay,
  autoplayDisableOnInteraction,
  autoplayPauseOnMouseEnter,

  items,
}) => {
  return (
    <MainContainer>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Mousewheel,
          Keyboard,
        ]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        simulateTouch={simulateTouch}
        grabCursor={grabCursor}
        speed={speed}
        mousewheel={{
          invert: { mousewheelInvert },
          releaseOnEdges: { mousewheelReleaseOnEdges },
          sensitivity: { mousewheelSensitivity },
        }}
        keyboard={{
          enabled: { keyboardEnabled },
          onlyInViewport: { keyboardOnlyInViewport },
        }}
        navigation={{
          nextEl: `${navigationNextEl}`,
          prevEl: `${navigationPrevEl}`,
        }}
        pagination={{
          el: `${paginationEl}`,
          type: `${paginationType}`,
        }}
        // autoplay={{
        //   delay: `${autoplayDelay}`,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
      >
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
        <div className='swiper-pagination'></div>

        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>

        <div className='swiper-progress-bar'>
          <div className='progress'></div>
          <div className='progress-sections'></div>
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
