import React, { useState } from 'react';
import styled from 'styled-components';

// Utility
import { secondary, primary, saturatedRed } from '../Utility/Colors';
import { SliderData } from '../Data/SliderData';

// Icons

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SectionStyle className='slider'>
      {SliderData.map((slide, index) => {
        return (
          <div key={index} className={index === current ? ' active' : ''}>
            {index === current && (
              <ImageStyle src={slide.image} alt='carousel' />
            )}
          </div>
        );
      })}
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 2rem;
    font-size: 3rem;
    color: ${secondary};
    z-index: 2;
    cursor: pointer;
    user-select: none;
    transition: all 0.6s ease;
    &:hover {
      color: ${saturatedRed};
      transform: scale(1.15);
    }
  }
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 2rem;
    font-size: 3rem;
    color: ${secondary};
    z-index: 2;
    cursor: pointer;
    user-select: none;
    filter: drop-shadow(0.3rem 0 0.3rem ${primary});
    transition: all 0.6s ease;
    &:hover {
      color: ${saturatedRed};
      transform: scale(1.15);
    }
  }
`;

const ImageStyle = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Carousel;
