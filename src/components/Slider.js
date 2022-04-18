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
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className='page'>{items[0]}</div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className='page'>{items[1]}</div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className='page'>{items[2]}</div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className='page'>{items[3]}</div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className='page'>{items[4]}</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
