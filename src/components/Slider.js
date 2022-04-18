import React from 'react';

/// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const Slider = ({ slidesPerView, sliderClass, items }) => {
  return (
    <div className='slider-wrapper'>
      <Swiper
        spaceBetween={50}
        className={sliderClass}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 140,
          },
        }}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
      >
        {items.map((item, index) => {
          return (
            <div key={index} className='page'>
              <SwiperSlide key={index}>{item}</SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
