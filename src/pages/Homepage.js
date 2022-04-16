import React from 'react';
// Page Components

import Carousel from '../components/Carousel';
import { SliderData } from '../Data/SliderData';
import SponsorShowcase from '../components/SponsorShowcase';
import SponsorItem from '../components/SponsorItem';
import SponsorsBar from '../components/SponsorsBar';
import { sponsorItems } from '../Data/SponsorData';

// Style
import styled from 'styled-components';

// Logos
import RazerLogo from '../img/SponsorLogos/razer.png';
import Redbull from '../img/SponsorLogos/redbull.svg';
import Logitech from '../img/SponsorLogos/logitech.png';
import Hyperx from '../img/SponsorLogos/hyperx.svg';
import Nvidia from '../img/SponsorLogos/nvidia.svg';
import Northface from '../img/SponsorLogos/northface.svg';
import Tesla from '../img/SponsorLogos/tesla.png';

const Homepage = () => {
  return (
    <div>
      <DivStyle>
        <Carousel slides={SliderData} />
      </DivStyle>
      <SponsorShowcase>
        {sponsorItems.map((item, index) => (
          <SponsorItem
            setImage={item.setImage}
            setAlt={item.setAlt}
            setText={item.setText}
            key={index}
            setVariants={item.setVariants}
          />
        ))}
      </SponsorShowcase>
      <SponsorsBar
        setSponsor1={RazerLogo}
        setSponsor2={Redbull}
        setSponsor3={Logitech}
        setSponsor4={Hyperx}
        setSponsor5={Nvidia}
        setSponsor6={Northface}
        setSponsor7={Tesla}
      ></SponsorsBar>
    </div>
  );
};

const DivStyle = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Homepage;
