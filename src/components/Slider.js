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
        {items.map((item, index) => {
          return (
            <div key={item.key} className='page'>
              <SwiperSlide key={item.key}>{item}</SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
