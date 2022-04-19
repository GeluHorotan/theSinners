import React from 'react';

/// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const Slider = ({ slidesPerView, sliderClass, items }) => {
  const params = {
    spaceBetween: 0,
    className: 'sliderClass',
    modules: [Navigation, Pagination, Scrollbar, A11y],
    slidesPerView: 3,
    Navigation: true,
    pagination: {
      clickable: true,
      el: '.slider-scrollbar',
      type: 'progressbar',
    },
    autoHeight: true,
  };
  return (
    <Swiper {...params}>
      <div className='swiper-wrapper'>
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
    </Swiper>
  );
};

export default Slider;
