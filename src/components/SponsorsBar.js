import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Logos
import RazerLogo from '../img/SponsorLogos/razer.png';
import Redbull from '../img/SponsorLogos/redbull.svg';
import Logitech from '../img/SponsorLogos/logitech.png';
import Hyperx from '../img/SponsorLogos/hyperx.svg';
import Nvidia from '../img/SponsorLogos/nvidia.svg';
import Northface from '../img/SponsorLogos/northface.svg';
import Tesla from '../img/SponsorLogos/tesla.png';

// Animation

import { sponsorsBar } from './animation';

// Colors
import { accent } from '../components/Colors';

const SponsorsBar = () => {
  return (
    <BarStyle>
      <ImagesStyle variants={sponsorsBar} initial='hidden' animate='show'>
        <motion.img src={RazerLogo} alt='' />
        <motion.img src={Redbull} alt='' />
        <motion.img src={Logitech} class='bigger' alt='' />
        <motion.img src={Hyperx} class='bigger' alt='' />
        <motion.img src={Nvidia} alt='' />
        <motion.img src={Northface} alt='' />
        <motion.img src={Tesla} alt='' />
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

  .bigger {
    width: 7rem;
  }

  img {
    width: 5rem;
    margin: 0 5rem;
  }
`;

const ImagesStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default SponsorsBar;
