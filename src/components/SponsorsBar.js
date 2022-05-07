import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Animation

import { sponsorsBar } from './animation';

// Colors
import { accent } from '../Utility/Colors';

const SponsorsBar = ({
  setSponsor1,
  setSponsor2,
  setSponsor3,
  setSponsor4,
  setSponsor5,
  setSponsor6,
  setSponsor7,
}) => {
  return (
    <BarStyle>
      <ImagesStyle variants={sponsorsBar} initial='hidden' animate='show'>
        <motion.img src={setSponsor1} alt='' />
        <motion.img src={setSponsor2} alt='' />
        <motion.img src={setSponsor3} className='bigger' alt='' />
        <motion.img src={setSponsor4} className='bigger' alt='' />
        <motion.img src={setSponsor5} alt='' />
        <motion.img src={setSponsor6} alt='' />
        <motion.img src={setSponsor7} alt='' />
      </ImagesStyle>
    </BarStyle>
  );
};

const BarStyle = styled.div`
  width: 100%;
  background: ${accent};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 2rem;
  overflow: hidden;

  .bigger {
    width: 5.5rem;
    @media screen and (max-width: 768px) {
      width: 4rem;
    }
    @media screen and (max-width: 1024px) {
      width: 4.5rem;
    }
    @media screen and (max-width: 1200px) {
      width: 5rem;
    }
  }

  img {
    width: 4rem;
    margin: 0 5rem;

    @media screen and (max-width: 768px) {
      width: 2rem;
    }
    @media screen and (max-width: 1024px) {
      width: 3rem;
    }
    @media screen and (max-width: 1200px) {
      width: 3.5rem;
    }
  }
`;

const ImagesStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SponsorsBar;
